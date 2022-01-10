import Link from 'next/link';

import useSite from 'hooks/use-site';
import { postPathBySlug } from 'lib/posts';
import { categoryPathBySlug } from 'lib/categories';
import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';

import Section from 'components/Section';
import Container from 'components/Container';
import NavListItem from 'components/NavListItem';

import styles from './Footer.module.scss';

const Footer = () => {
  const { metadata = {}, recentPosts = [], categories = [], menus } = useSite();
  const { title } = metadata;
  // console.log(categories)
  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;
  const hasRecentCategories = Array.isArray(categories) && categories.length > 0;
  const hasMenu = hasRecentPosts || hasRecentCategories;

  const navigation = findMenuByLocation(menus, [
    process.env.WORDPRESS_MENU_LOCATION_NAVIGATION,
    MENU_LOCATION_NAVIGATION_DEFAULT,
  ]);

  return (
    <footer className={styles.footer}>
      {hasMenu && (
        <Section className={styles.footerMenu}>
          <Container>
            <ul className={styles.footerMenuColumns}>
              <li>
                <p className={styles.footerMenuTitle}>
                  <strong>Company</strong>
                </p>
                <ul className={styles.footerMenuItems}>
                  {navigation?.map((listItem) => {
                    return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
                  })}
                </ul>
              </li>
              {hasRecentPosts && (
                <li>
                  <p className={styles.footerMenuTitle}>
                    <strong>Recent Posts</strong>
                  </p>
                  <ul className={styles.footerMenuItems}>
                    {recentPosts.map((post) => {
                      const { id, slug, title } = post;
                      return (
                        <li key={id}>
                          <Link href={postPathBySlug(slug)}>
                            <a>{title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
              {hasRecentCategories && (
                <li>
                  <Link href="/categories/">
                    <a className={styles.footerMenuTitle}>
                      <strong>Categories</strong>
                    </a>
                  </Link>
                  <ul className={styles.footerMenuItems}>
                    {categories.map((category) => {
                      if (category.count < 1) return;
                      const { id, slug, name } = category;
                      return (
                        <li key={id}>
                          <Link href={categoryPathBySlug(slug)}>
                            <a>{name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
              <li>
                <p className={styles.footerMenuTitle}>
                  <strong>More</strong>
                </p>
                <ul className={styles.footerMenuItems}>
                  <li>
                    <Link href="/feed.xml">
                      <a>RSS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml">
                      <a>Sitemap</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </Container>
        </Section>
      )}

      <Section className={styles.footerLegal}>
        <Container>
          <p>
            &copy; {new Date().getFullYear()} {title}
          </p>
          <p>
            We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program
            designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.
          </p>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
