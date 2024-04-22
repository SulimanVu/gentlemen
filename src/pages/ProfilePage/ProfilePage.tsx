import { useParams } from 'react-router-dom';
import styles from './profilepage.module.scss';
import avatar from '@/shared/assets/images/avatar.svg';
import { useUserServiceGetUserById } from '@/shared/api/openApi/queries';
import { Form } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Input, Flex } from 'gentlemen-ui-kit';

const ProfilePage = () => {
  const { id } = useParams();
  const { data } = useUserServiceGetUserById({ id: id as string });
  const formik = useFormik({
    initialValues: {
      name: data?.name,
      photo: data?.photo,
      login: data?.login,
      nikname: data?.nikname,
    },
    onSubmit: async (data) => {
      
    },
    validationSchema: Yup.object({
      login: Yup.string().required('error').email('error'),
      password: Yup.string().required('error'),
    }),
  });

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Form>
          <Flex vertical gap={8} align="center">
            <div className={styles.avatar}>
              {formik.values.photo ? (
                <img src={formik.values.photo} alt="avatar" />
              ) : (
                <img src={avatar} alt="avatar" />
              )}
              <div className={styles.buttons}>
                <button className={styles.add}>Добавить фото</button>
                {!formik.values.photo ? null : <button className={styles.delete}> Удалить</button>}
              </div>
            </div>

            <div className={styles.info}>
              <Input type="text" placeholder="Введите имя" {...formik.getFieldProps('name')} />
              <Input type="email" placeholder="Введите почту" {...formik.getFieldProps('login')} />
              <Input
                type="text"
                placeholder="Введите свой никнейм"
                {...formik.getFieldProps('nikname')}
              />
              <Button type="primary" onClick={() => formik.handleSubmit()}>
                Сохранить
              </Button>
            </div>
          </Flex>
        </Form>
      </div>
    </div>
  );
};

export default ProfilePage;
