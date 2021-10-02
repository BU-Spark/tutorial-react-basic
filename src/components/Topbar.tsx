import React from "react";
import { ReactComponent as Coins } from "../resources/coins.svg";
import { Row, Col, Typography } from "antd";
const { Title } = Typography;

export function TopBar() {
  return (
    <>
      <Row
        justify="start"
        align="middle"
        style={{
          width: "100%",
          marginTop: "1vh",
          marginLeft: "0px",
          paddingLeft: "0px",
        }}
      >
        <Col style={{ paddingLeft: "0px" }}>
          <Coins
            style={{ height: "8vh", padding: "1vh", paddingLeft: "0px" }}
          />
        </Col>
        <Col style={{ height: "10vh" }}>
          <Title style={{ color: "white", fontSize: "2rem", margin: "0px" }}>
            Crypto Ticker
          </Title>
        </Col>
      </Row>
    </>
  );
}
