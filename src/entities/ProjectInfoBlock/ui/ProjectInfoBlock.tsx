import { FC } from 'react';

import { Flex } from 'antd';
import { Button, Title } from 'gentlemen-ui-kit';

import { PropertyValueObj } from '../index';

import { ProjectInfo } from './ProjectInfoItem';

import styles from './projectInfo.module.scss';
import { University } from '@/shared/api/openApi/requests';
import { Link, Navigate } from 'react-router-dom';

export interface ILabels {
  key: string;
  value?: string | PropertyValueObj;
}

interface ProjectInfoBlockProps {
  data: University;
  title: string;
}

export const ProjectInfoBlock: FC<ProjectInfoBlockProps> = ({ data, title }) => {
  return (
    <Flex vertical gap={16} className={styles.projectInfoBlock}>
      <div className={styles.header}>
        <Flex align="center" gap={16}>
          <Title level={3}>{title}</Title>
        </Flex>
      </div>
      <Flex vertical gap={12}>
        <ProjectInfo propertyName="Почта" propertyValue={data.email} />
        <ProjectInfo propertyName="Сайт Университета" propertyValue={data.siteUrl} />
        <ProjectInfo
          propertyName="Почта приемной комиссии"
          propertyValue={data.selectionCommittee?.mail}
        />
        <ProjectInfo
          propertyName="Рабочий номер приемной комиссии"
          propertyValue={data.selectionCommittee?.phone}
        />
        <Link to={`/dormitore/${data?.dormitory?._id}`}>Перейти к общежитию</Link>
      </Flex>
    </Flex>
  );
};
