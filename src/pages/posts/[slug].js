import Link from 'next/link';
import { Helmet } from 'react-helmet';

import { getPostBySlug, getAllPosts, getRelatedPosts, postPathBySlug, sanitizeExcerpt } from 'lib/posts';
import { categoryPathBySlug } from 'lib/categories';
import { formatDate } from 'lib/datetime';
import { ArticleJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';
import usePageMetadata from 'hooks/use-page-metadata';
import { useScrollIndicator } from 'hooks/react-use-scroll-indicator.ts';

import Layout from 'components/Layout';
// import Header from 'components/Header';
import HeaderPost from 'components/HeaderPost';
import Section from 'components/Section';
import Container from 'components/Container';
// import ContainerPost from 'components/ContainerPost';
import Content from 'components/Content';
import Metadata from 'components/Metadata';
import Author from 'components/Author';
import FeaturedImage from 'components/FeaturedImage';

import styles from 'styles/pages/Post.module.scss';

export default function Post({ post, socialImage, relatedPosts }) {
  const [state] = useScrollIndicator({ onElement: true });
  const {
    title,
    metaTitle,
    description,
    content,
    date,
    author,
    categories,
    modified,
    featuredImage,
    isSticky = false,
    excerpt,
  } = post;

  const { metadata: siteMetadata = {}, homepage } = useSite();

  if (!post.og) {
    post.og = {};
  }

  post.og.imageUrl = `${homepage}${socialImage}`;
  post.og.imageSecureUrl = post.og.imageUrl;
  post.og.imageWidth = 2000;
  post.og.imageHeight = 1000;

  const { metadata } = usePageMetadata({
    metadata: {
      ...post,
      title: metaTitle,
      description: description || post.og?.description || `Read more about ${title}`,
    },
  });

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const metadataOptions = {
    compactCategories: false,
  };

  const { posts: relatedPostsList, title: relatedPostsTitle } = relatedPosts;

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout procentScroll={state}>
      <Helmet {...helmetSettings} />

      <ArticleJsonLd post={post} siteTitle={siteMetadata.title} />

      <HeaderPost>
        {featuredImage && (
          <FeaturedImage
            {...featuredImage}
            src={featuredImage.sourceUrl}
            dangerouslySetInnerHTML={featuredImage.caption}
          />
        )}
        <div>
          <Metadata
            className={styles.postMetadata}
            date={date}
            author={author}
            categories={categories}
            options={metadataOptions}
            isSticky={isSticky}
          />
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          {excerpt && (
            <div
              className={styles.postCardContent}
              dangerouslySetInnerHTML={{
                __html: sanitizeExcerpt(excerpt),
              }}
            />
          )}
          <Author className={styles.postCardMetadata} author={author} />
        </div>
      </HeaderPost>

      <Content>
        <Section>
          <Container>
            <div
              ref={state.targetElement}
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </Container>
        </Section>
      </Content>

      <Section className={styles.postFooter}>
        <Container>
          <p className={styles.postModified}>Last updated on {formatDate(modified)}.</p>
          {!!relatedPostsList.length && (
            <div className={styles.relatedPosts}>
              {relatedPostsTitle.name ? (
                <span>
                  More from{' '}
                  <Link href={relatedPostsTitle.link}>
                    <a>{relatedPostsTitle.name}</a>
                  </Link>
                </span>
              ) : (
                <span>More Posts</span>
              )}
              <ul>
                {relatedPostsList.map((post) => (
                  <li key={post.title}>
                    <Link href={postPathBySlug(post.slug)}>
                      <a>{post.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { post } = await getPostBySlug(params?.slug);

  const socialImage = `${process.env.OG_IMAGE_DIRECTORY}/${params?.slug}.png`;

  const { categories, databaseId: postId } = post;
  const category = categories.length && categories[0];
  let { name, slug } = category;

  return {
    props: {
      post,
      socialImage,
      relatedPosts: {
        posts: await getRelatedPosts(category, postId),
        title: {
          name: name || null,
          link: categoryPathBySlug(slug),
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts();

  const paths = posts
    .filter(({ slug }) => typeof slug === 'string')
    .map(({ slug }) => ({
      params: {
        slug,
      },
    }));

  return {
    paths,
    fallback: false,
  };
}
