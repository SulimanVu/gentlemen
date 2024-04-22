import { Layout } from 'antd';


export const LayoutContent = ({children}: any) => {
  return (
    <Layout style={{ height: '100vh' }}>
      {children}
    </Layout>
  )
}