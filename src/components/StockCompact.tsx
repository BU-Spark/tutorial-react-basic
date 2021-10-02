import React from "react";
import { Alert, Card, Col, Row, Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { getAssets } from "../api/assets";
import { Asset } from "../api/types";

export function CompactStock(props: Asset) {
  return (
    <>
      <Card
        onClick={() => {
          console.log("Hello");
        }}
        title={props.name}
        style={{ width: "100vw", alignContent: "left" }}
      >
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
  );
}
