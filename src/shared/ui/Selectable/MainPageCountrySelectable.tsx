import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';
import styled from 'styled-components';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Москва',
  },
  {
    key: '2',
    label: 'Грозный',
  },
  {
    key: '3',
    label: 'Казань',
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

export const MainPageCountrySelectable: React.FC = () => (
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
        Страны
        <DownOutlined />
      </Space>
    </Typography.Link>
  </StyledDropdown>
);

