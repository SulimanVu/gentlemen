import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';
import styled from 'styled-components';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Тут много разных программ',
  },
  {
    key: '2',
    label: 'Тут много разных программ',
  },
  {
    key: '3',
    label: 'Тут много разных программ',
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

export const MainPageProgramsSelectable: React.FC = () => (
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
        Программы
        <DownOutlined />
      </Space>
    </Typography.Link>
  </StyledDropdown>
);

