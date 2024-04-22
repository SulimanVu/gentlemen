import { Review } from '@/shared/api/openApi/requests';
import { EditOutlined, HeartOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Meta } = Card;

interface NewsCardProps {
  title: string;
  descriptions: string;
  img?: string[];
  id?: string;
  reviews?: Review[];
}

export const NewsCard: React.FC<NewsCardProps> = (props) => (
  <Card
    style={{ width: 300 }}
    cover={<img alt="example" src={props.img ? `http://localhost:3010/${props.img[0]}` : ''} />}
    actions={[
      <EditOutlined key="edit" />,
      <span>{props.reviews?.length}</span>
    ]}
  >
    <Meta
      title={props.title}
      description={
        props.descriptions.length > 300 ? `${props.descriptions.slice(0, 180)}...` : props.descriptions
      }
    />
  </Card>
);
