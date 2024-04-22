import { useSignOut } from '@/shared/hooks';
import { parseJwt } from '@/shared/hooks/parseJWT';
import { Button, Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  const Navigate = useNavigate();

  const items1 = [
    { title: 'Главная', path: '/main' },
    { title: 'Страны', path: '/country' },
    { title: 'Программы', path: '/program' },
    { title: 'Контакты', path: '/contact' },
  ].map((key) => ({
    key,
    onClick: () => Navigate(`${key.path}`),
    label: `${key.title}`,
  }));

  const token = localStorage.getItem('token') && parseJwt(localStorage.getItem('token') as string);
  const removeToken = useSignOut()

  return (
    <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
      <LogoText>Gentelmen</LogoText>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      />

      {token ? (
           <div style={{ width: 300, display: 'flex', justifyContent: 'space-between', gap: 50 }}>
          <Button type="primary" style={{ backgroundColor: 'white', color: '#001529' }} onClick={() => removeToken()} >
            Выйти
          </Button>
          <Button type="primary" style={{ backgroundColor: 'white', color: '#001529' }} onClick={() => Navigate('/newProfile')}>
            Мой профиль
          </Button>
        </div>
      ) : (
        <div style={{ width: 300, display: 'flex', justifyContent: 'space-between', gap: 50 }}>
          <Button type="primary" style={{ backgroundColor: 'white', color: '#001529' }} onClick={() => Navigate('/signIn')}>
            Войти
          </Button>
          <Button type="primary" style={{ backgroundColor: 'white', color: '#001529' }}>
            Зарегистрироваться
          </Button>
        </div>
      )}
    </Layout.Header>
  );
};

const LogoText = styled.div`
  color: white;
  font-size: 24px;
  margin-right: 50px;
`;
