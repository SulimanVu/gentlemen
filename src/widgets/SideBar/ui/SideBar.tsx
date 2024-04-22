import { useSignOut } from '@/shared/hooks';
import { SideBar as AtndSideBar, Icon } from 'gentlemen-ui-kit';
import { useNavigate } from 'react-router-dom';

export const SideBar = () => {
  const navigate = useNavigate();

  return (
    <AtndSideBar
      items={[
        {
          label: 'Главная',
          icon: <Icon as="Home" color="#0077FF" />,
          onClick: () => navigate('/main'),
        },
        {
          label: 'Новости',
          icon: <Icon as="NotificationNew" color="#0077FF" />,
          onClick: () => navigate('/news'),
        },
        {
          label: 'Чат',
          icon: <Icon as="ChatMessage" color="#0077FF" />,
          onClick: () => navigate('/chat'),
        },
        {
          label: 'Аккаунт',
          icon: <Icon as="SidebarProfile" color="#0077FF" />,
          onClick: () => navigate('/profile'),
        },
        {
          label: 'Настройки',
          icon: <Icon as="SidebarSettings" color="#0077FF" />,
          onClick: () => navigate('/settings'),
        },
        {
          label: 'Выход',
          icon: <Icon as="EnterRight" color="#0077FF" />,
          onClick: () => useSignOut(),
        },
      ]}
    />
  );
};
