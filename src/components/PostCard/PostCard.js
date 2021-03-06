import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

import Metadata from 'components/Metadata';

import styles from './PostCard.module.scss';
import FeaturedImage from 'components/FeaturedImage';

const PostCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, author, categories, isSticky = false, featuredImage } = post;
  const { excludeMetadata = [] } = options;

  const metadata = {};

  if (!excludeMetadata.includes('author')) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }

  let postCardStyle = styles.postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  }

  return (
    <div className={postCardStyle}>
      {featuredImage && (
        <div>
          <Link href={postPathBySlug(slug)}>
            <a aria-label={title}>
              <FeaturedImage
                {...featuredImage}
                sticky={isSticky}
                src={featuredImage.sourceUrl}
                dangerouslySetInnerHTML={featuredImage.caption}
              />
            </a>
          </Link>
        </div>
      )}
      <div>
        {/* {isSticky && <FaMapPin aria-label="Sticky Post" />} */}
        <Link href={postPathBySlug(slug)}>
          <a>
            <h3
              className={styles.postCardTitle}
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          </a>
        </Link>
        {excerpt && (
          <div
            className={styles.postCardContent}
            dangerouslySetInnerHTML={{
              __html: sanitizeExcerpt(excerpt),
            }}
          />
        )}
        <Metadata className={styles.postCardMetadata} {...metadata} />
        {/* <Author className={styles.postCardMetadata} {...metadata} /> */}
      </div>
    </div>
  );
};

export default PostCard;
