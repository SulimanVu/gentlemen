import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';
import styled from 'styled-components';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Russian',
  },
  {
    key: '2',
    label: 'English',
  },
  {
    key: '3',
    label: 'Chechen',
  },
];

const StyledDropdown = styled(Dropdown)`
  display: flex;
  align-items: center;
  color: white;
  /* Добавляем стили к ссылке */
  cursor: pointer;
  color: #1677ff;
  &:hover {
    text-decoration: underline;
  }
`;

export const MainPageLanguageSelectable: React.FC = () => (
  <StyledDropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['3'],
      defaultOpenKeys: ['2'],
      theme: 'light'
    }}
  >
    <Typography.Link>
      <Img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb88fc2691105ad2168f03741fa1ad811811bb08824806118bb3da962433a46?apiKey=e42cd9368a8e421884a35ab82a3ff557&"
      />
      <Space>
        Русский
        <DownOutlined />
      </Space>
    </Typography.Link>
  </StyledDropdown>
);

const Img = styled.img`
  aspect-ratio: 0.7;
  object-fit: auto;
  object-position: center;
  width: 16px;
  margin: auto 10px;
`;