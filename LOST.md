# What is this:

This document includes some code blocks to help you catch back up with the tutorial if you fall behind.

# App.tsx

## State Management Stuff 
```const [assets, setAssets] = useState<Asset[]>([]);
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
  ```

## Base Layout
This goes inside the `render()` function
```<>
      <Layout style={{ width: "100vw" }}>
        <Header style={{ height: "10vh" }}>
        </Header>

        <Content style={{ textAlign: "left", width: "100vw" }}>
        
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <p>Spark! Mini-Hack</p>
        </Footer>
      </Layout>
    </>
```

## List Item

This is the list item that displays the individual cards

```
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
```

# StockCompact.tsx

## Basic Layout

```
 <>
      <Card title={props.name} style={{ width: "100vw", alignContent: "left" }}>
        <Row>
          <Col style={{ padding: "5px" }}>
           
          </Col>
          <Col style={{ padding: "5px" }}>
            
          </Col>
          <Col style={{ padding: "5px" }}>
            
          </Col>
        </Row>
      </Card>
    </>

```

## Complete

```
 <>
      <Card title={props.name} style={{ width: "100vw", alignContent: "left" }}>
        <Row>
          <Col style={{ padding: "5px" }}>
            <Statistic
              title={props.symbol}
              value={props.priceUsd}
              precision={2}
              prefix={"$"}
              suffix={
                props.changePercent24Hr > 0 ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
              valueStyle={{
                color: props.changePercent24Hr > 0 ? "#3f8600" : "#cf1322",
              }}
            />
          </Col>
          <Col style={{ padding: "5px" }}>
            <Statistic
              title="Volume"
              value={props.volumeUsd24Hr}
              precision={0}
              prefix={"$"}
            />
          </Col>
          <Col style={{ padding: "5px" }}>
            <Statistic
              title="Market Cap"
              value={props.marketCapUsd}
              precision={0}
              prefix={"$"}
            />
          </Col>
        </Row>
      </Card>
    </>
```

# Assets API 

```
export function getAssets(limit: number, offset: number): Promise<Asset[]> {
  var requestOptions = {
    method: "GET",
  };
  return fetch(
    `https://api.coincap.io/v2/assets?limit=${limit}&offset=${offset}`,
    requestOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{ data: Asset[] }>;
    })
    .then((data) => {
      return data.data;
    });
}
```