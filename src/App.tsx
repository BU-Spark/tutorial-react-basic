import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { TopBar } from "./components/Topbar";
import { Button, Card, Layout } from "antd";
import { Pagination, List } from "antd";
import { CompactStock } from "./components/StockCompact";
import { getAssets } from "./api/assets";
import { Asset } from "./api/types";
import useInfiniteScroll from "react-infinite-scroll-hook";

const { Header, Footer, Content } = Layout;

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreButton = useRef(null);

  async function callAssets() {
    console.log("Loading assets");
    const result = await getAssets(10, offset);
    setAssets(result);
  }

  useEffect(() => {
    callAssets();
    setIsLoading(false);
    setOffset(offset + 10);
  }, []);

  return (
    <>
      <Layout style={{ width: "100vw" }}>
        <Header style={{ height: "10vh" }}>
          <TopBar />
        </Header>

        <Content style={{ textAlign: "left", width: "100vw" }}>
          {/* <CompactStock {...assets[0]} />
          <CompactStock {...assets[1]} />
          <CompactStock {...assets[2]} />
          <CompactStock {...assets[3]} />
          <CompactStock {...assets[4]} /> */}
          <List
            loading={isLoading}
            loadMore={
              <div
                style={{
                  textAlign: "center",
                  marginTop: 12,
                  height: 32,
                  lineHeight: "32px",
                }}
              >
                <Button
                  ref={loadMoreButton}
                  onClick={() => {
                    setOffset(offset + 10);
                    callAssets();
                  }}
                >
                  Load More
                </Button>
              </div>
            }
            dataSource={assets}
            renderItem={(item) => <CompactStock {...item} />}
          />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <p>Spark! Mini-Hack</p>
        </Footer>
      </Layout>
    </>
  );
}

export default App;
