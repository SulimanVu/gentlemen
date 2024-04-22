import { useState } from 'react';
import { Button, Flex, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from './addNews.module.scss';
import axios from 'axios';

const AddNews = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    console.log(e.target.files);
    
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleFileChange = (e) => {
    setDescription(e.target.value);
  };

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3010', 
  });
  const handleSubmit = () => {
    const data = {
      title: title,
      description: description,
    };

    axios.post('/news', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className={styles.news}>
      <Flex vertical gap={12}>
        <Input
          placeholder="Title"
          variant="filled"
          value={title}
          onChange={handleTitleChange}
        />
        <Input
          placeholder="Description"
          variant="filled"
          value={description}
          onChange={handleDescriptionChange}
        />
        <Upload onChange={handleFileChange}>
          <Button icon={<UploadOutlined />}>Добавить фото</Button>
        </Upload>
        <Button onClick={handleSubmit}>Добавить новость к университету</Button>
      </Flex>
    </div>
  );
};

export default AddNews;
