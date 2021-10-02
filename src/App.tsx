import React, { useEffect, useState } from "react";
import "./App.css";
import { TopBar } from "./components/Topbar";
import { Layout } from "antd";
import { Row, Col, Typography } from "antd";
import { CompactStock } from "./components/StockCompact";
import { getAssets } from "./api/assets";
import { Asset } from "./api/types";

const { Header, Footer, Content } = Layout;

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);
  useEffect(() => {
    async function callAssets() {
      const result = await getAssets(5, 0);
      setAssets(result);
    }
    callAssets();
  }, []);
  return (
    <>
      <Layout style={{ width: "100vw" }}>
        <Header style={{ height: "10vh" }}>
          <TopBar />
        </Header>

        <Content style={{ textAlign: "left", width: "100vw" }}>
          <CompactStock {...assets[0]} />
          <CompactStock {...assets[1]} />
          <CompactStock {...assets[2]} />
          <CompactStock {...assets[3]} />
          <CompactStock {...assets[4]} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <p>Spark! Mini-Hack</p>
        </Footer>
      </Layout>
    </>
  );
}

export default App;
