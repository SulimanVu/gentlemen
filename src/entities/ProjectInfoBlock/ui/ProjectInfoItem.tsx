import { FC } from 'react';

import { Col, Row } from 'antd';
import { Text } from 'gentlemen-ui-kit';

export interface PropertyValueObj {
  avatar: string;
  name: string;
  email: string;
}

export interface ProjectInfoProps {
  propertyName: string;
  propertyValue?: string | PropertyValueObj;
}

export const ProjectInfo: FC<ProjectInfoProps> = ({ propertyName, propertyValue }) => {
  return (
    <Row align="middle" gutter={[12, 12]}>
      <Col span={12}>
        <Text color="textNeutralSecondary">{propertyName}</Text>
      </Col>
      {!propertyValue && (
        <Col span={12}>
          <Text color="textNeutralPlaceholder">Нет информации</Text>
        </Col>
      )}
      <Col span={12}>
        <Text color="#30303D">{propertyValue}</Text>
      </Col>
    </Row>
  );
};
