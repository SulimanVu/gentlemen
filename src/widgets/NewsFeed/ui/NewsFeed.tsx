import { FC } from 'react';
import styles from './newsFeed.module.scss';
import { useUniversityNewsServiceGetNews } from '@/shared/api/openApi/queries';
import icon from './icon/commentsIcon.png';
import { useNavigate } from 'react-router-dom';
import { NewsCard } from '@/widgets/NewsCard';

interface NewsFeedProps {}

export const NewsFeed: FC<NewsFeedProps> = (params) => {
  const { data, isLoading, isError } = useUniversityNewsServiceGetNews();
  const navigate = useNavigate();

  const handleOnNewsPage = (id: undefined | string) => {
    navigate(`/newsPage/${id}`);
  };

  if (isLoading || isError || !data) {
    return <></>;
  }
  return (
    <div className={styles.newsFeed}>
      {data?.map((news, index) => (
        <div className={styles.news} key={index} onClick={() => handleOnNewsPage(news._id)}>
          <NewsCard
            title={news.title}
            descriptions={news.description}
            img={news.image}
            id={news._id}
            reviews={news.reviews}
            key={index}
          />
        </div>
      ))}
    </div>
  );
};
