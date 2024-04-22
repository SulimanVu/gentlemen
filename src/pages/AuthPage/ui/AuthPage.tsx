import { AuthCarousel } from '@/widgets/AuthCarousel';
import { AuthForm } from '@/widgets/AuthForm';


import styles from './authPage.module.scss';
import { Tabs, TabsProps } from 'antd';


const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Студент',
    children: <AuthForm />,
  },
  {
    key: '2',
    label: 'Университет',
    children: <AuthForm />,
  },
];

const Tab: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export const AuthPage = () => {
  return (
    <div className={styles.authPage}>
      <div style={{width: '50%', padding: '10%'}}>
        <Tab/>
      </div>
      <AuthCarousel />
    </div>
  );
};



