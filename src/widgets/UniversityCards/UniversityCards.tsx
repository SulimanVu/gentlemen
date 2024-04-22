import { UniversityCardMainPage } from '@/shared/ui/UniversityCardMainPage/UniversityCardMainPage';
import { Flex } from 'antd';
import styles from './universityCards.module.scss';
import { useUniversityServiceGetUniversity } from '@/shared/api/openApi/queries';

export const UniversityCards = () => {
  const { data, isLoading, isError } = useUniversityServiceGetUniversity();

  if (!data) {
    return <></>;
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <Flex align="center" wrap="wrap" gap={8} className={styles.cards}>
      {data?.map((item) => (
        <UniversityCardMainPage
          universityName={item.name || ''}
          location={item?.address || ''}
          siteUrl={item.siteUrl || ''}
          email={item.email || ''}
          // users={item.users || ''}
          backgroundImage={item.image && `http://localhost:3010/${item.image[0]}`}
          link={item?._id || ''}
        />
      ))}
    </Flex>
  );
};
