import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';
import styled from 'styled-components';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Обучение',
  },
  {
    key: '2',
    label: 'Онлайн Обучение',
  },
  {
    key: '3',
    label: 'Что то еще',
  },
];

const StyledDropdown = styled(Dropdown)`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  color: #1677ff;
  &:hover {
    text-decoration: underline;
  }
`;

export const MainPageServiceSelectable: React.FC = () => (
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
      <Space>
        Услуги
        <DownOutlined />
      </Space>
    </Typography.Link>
  </StyledDropdown>
);

