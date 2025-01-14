import { Layout } from "antd";

import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1>the main content should be here </h1>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
