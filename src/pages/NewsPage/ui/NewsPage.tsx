import { FC } from 'react';
import styles from './newsPage.module.scss';
import { useParams } from 'react-router-dom';
import { useUniversityNewsServiceGetNewsById } from '@/shared/api/openApi/queries';
import { LayoutContent } from '@/widgets/Layout/Layout';
import { Header } from '@/widgets/Header/Header';

interface NewsPageProps { }

export const NewsPage: FC<NewsPageProps> = (props) => {
  const { id } = useParams();

  const { data, isLoading, isError } = useUniversityNewsServiceGetNewsById({ id: id as string })

  if (isLoading || isError || !data) {
    return <></>;
  }
  const grid = data.image?.length
  console.log(grid);


  return (
    <div className={styles.newsPage}>
      <LayoutContent>
        <Header />
        <div className={styles.title}>
          <span>{data?.title}</span>
        </div>
        <div className={styles.info}>
          <div className={styles.newsImg}>
            {data.image?.length && data.image?.length > 1 ?
              data.image.map((image, index) => (
                <img src={data.image ? `http://localhost:3010/${data.image[index]}` : ''} alt="" />
              ))
              :
              <img src={data.image ? `http://localhost:3010/${data.image[0]}` : ''} alt="" />
            }

          </div>
          <div className={styles.descriptions}><span>{data?.description}</span></div>
        </div>

        <div className={styles.comments}></div>
      </LayoutContent>
    </div>
  );
};