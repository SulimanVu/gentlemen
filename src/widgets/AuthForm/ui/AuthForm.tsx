import { useLocation, useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useUserServicePostLogin, useUserServicePostUser } from '@/shared/api/openApi/queries';

import styles from './authForm.module.scss';
import { saveAuth, useSignOut } from '@/shared/hooks';
import { Form, Checkbox } from 'antd';
import { Flex, ServiceIcon, Text, Input, Button, Title } from 'gentlemen-ui-kit';
import { useEffect, useState } from 'react';

export const AuthForm = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pageSignIn = pathname === '/signIn';

  const [tabState, setTabState]=useState('1')

  const logOut = useSignOut();
  const signIn = useUserServicePostLogin();
  const signUp = useUserServicePostUser();

  const formik = useFormik({
    initialValues: { login: '', password: '', rememberMe: false, name: '' },
    onSubmit: async ({ login, password, name }) => {
      try {
        let data;
        if (pageSignIn) {
          data = await signIn.mutateAsync({
            requestBody: {
              login,
              password,
            },
          });
        } else {
          data = await signUp.mutateAsync({
            requestBody: {
              login,
              password,
              name,
            },
          });
        }

        if (data && 'token' in data) {
          saveAuth(data.token as string);
          navigate('/newProfile');
        } else {
          navigate('/signIn');
        }
      } catch (error) {
        console.error('Ошибка отправки данных');
      }
    },
    validationSchema: Yup.object({
      login: Yup.string().required('error').email('error'),
      password: Yup.string().required('error'),
    }),
  });

  useEffect(() => {
    logOut();
  }, []);

  return (
    <div className={styles.form}>

      <Flex gap={24} vertical align="center">
        <ServiceIcon as={'Logout'} themeColor="brand100" />
        <Flex vertical align="center" gap={8}>
          <Title level={2}>{pageSignIn ? 'Авторизация' : 'Регистрация'}</Title>
          <Text>
            {pageSignIn
              ? 'Добро пожаловать! Введите свои данные'
              : 'Введите данные для регистрации'}
          </Text>
        </Flex>
        <Form>
          <Flex vertical gap={24}>
            {!pageSignIn && (
              <Flex vertical>
                <Text>Как к вам обращаться ?</Text>
                <Input
                  status={formik.errors.login === 'error' ? 'error' : ''}
                  type="text"
                  placeholder="Введите почту"
                  {...formik.getFieldProps('name')}
                />
              </Flex>
            )}
            <Flex vertical>
              <Text>Почта</Text>
              <Input
                status={formik.errors.login === 'error' ? 'error' : ''}
                type="login"
                placeholder="Введите почту"
                {...formik.getFieldProps('login')}
              />
            </Flex>
            <Flex vertical gap={8}>
              <Flex vertical>
                <Text>Пароль</Text>
                <Input
                  status={formik.errors.password === 'error' ? 'error' : ''}
                  type="password"
                  placeholder="Введите пароль"
                  {...formik.getFieldProps('password')}
                />
              </Flex>
              <Flex justify="space-between">
                <Flex gap={8}>
                  <Checkbox
                    checked={formik.values.rememberMe}
                    {...formik.getFieldProps('rememberMe')}
                  />
                  <Text>Запомнить меня</Text>
                </Flex>
                {pageSignIn && <Text>Забыли пароль?</Text>}
              </Flex>
            </Flex>
            <Button type="primary" onClick={formik.handleSubmit}>
              {pageSignIn ? 'Войти' : 'Зарегистрироваться'}
            </Button>
            <Button
              type="text"
              className={styles.signInBtn}
              onClick={() => navigate(pageSignIn ? '/signUp' : '/signIn')}
            >
              <Text color="blue110">
                {pageSignIn ? 'Зарегистрироваться' : 'Войти в существующий'}
              </Text>
            </Button>
          </Flex>
        </Form>
      </Flex>
    </div>
  );
};
