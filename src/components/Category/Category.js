import Link from 'next/link';
import { categoryPathBySlug } from 'lib/categories';
import SectionTitle from 'components/SectionTitle';
import styles from './Category.module.scss';

const Category = ({ categories, title, color }) => {
  return (
    <>
      <SectionTitle>{title} 📚</SectionTitle>
      <div className={styles.categories}>
        {categories
          .sort((a, b) => b.count - a.count)
          .map((category) => {
            return (
              category.count && (
                <Link key={category.slug} href={categoryPathBySlug(category.slug)}>
                  <a style={{ backgroundColor: color }} className={`${styles.card}`}>
                    <div className={styles.count}>
                      {category.count > 1 ? `${category.count} articles` : `${category.count} article`}
                    </div>
                    <span>{category.name}</span>
                    <div
                      className={styles.description}
                      dangerouslySetInnerHTML={{
                        __html: category.description,
                      }}
                    />
                  </a>
                </Link>
              )
            );
          })}
      </div>
    </>
  );
};

export default Category;
