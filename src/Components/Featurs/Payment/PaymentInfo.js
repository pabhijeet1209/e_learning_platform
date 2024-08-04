import React, { useState } from "react";
import { Button, Card, Col, Row, Drawer, Tag } from "antd";
import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import "./PaymentInfo.css";
import RegisterForm from "../../Utils/Register/Register";
import PaymentWidget from "sam-lms-payment-component";
import { CircleClip } from "../../Utils/CustomClip/CircleClip";

export const PaymentInfo = () => {
  const [open, setOpen] = useState(false);
  const [paymentcard, setPaymentCard] = useState(false);

  const handlePayment = () => {
    setOpen(true);
    setPaymentCard(true);
  };

  return (
    <div
      style={{
        width: "100%",
        marginTop: "10px",
        paddingInline: "10px",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      {!paymentcard && (
        <Card className="payment-card" style={{ borderRadius: "10px" }}>
          <Col style={{ position: "relative", zIndex: 1 }}>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "22px", fontWeight: "300" }}>
                Enroll Now
              </span>
              <Tag
                className="heighlight"
                color="green"
                bordered={false}
                style={{
                  fontSize: "14px",
                  fontWeight: "300",
                  padding: "3px",
                }}
              >
                20% discount
              </Tag>
            </Row>
            <div>
              <div style={{fontSize:'12px', color: "grey"}}>
                Climb higher education that{" "}
                <span style={{ color: "black" }}>elevates.</span>
              </div>
              <div style={{ alignItems: "center", marginTop: "4px" }}>
                <div style={{ color: "gray" }}>Price</div>
                <span
                  style={{
                    fontSize: "22px",
                    color: "",
                    fontWeight: "200",
                  }}
                >
                  ₹1600
                </span>
                <Tag
                  color="gold"
                  bordered={false}
                  style={{
                    marginLeft: "10px",
                    textDecoration: "line-through",
                  }}
                >
                  ₹2000
                </Tag>
              </div>
            </div>
            <center>
              <Button className="enroll-button" onClick={handlePayment}>
                Continue
                <ArrowRightOutlined className="enroll-icon" />
              </Button>
            </center>
          </Col>
          <CircleClip />
        </Card>
      )}
      {paymentcard && (
        <Card className="payment-link-card">
          <PaymentWidget apiUrl="https://2f4d-2406-b400-d5-4f90-70-9f52-2f38-9b97.ngrok-free.app/api" />
          <CircleClip />
        </Card>
      )}
      <Drawer
        placement={"right"}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        style={{
          position: "absolute",
          height: "100%",
          borderRadius: "25px",
        }}
      >
        <RegisterForm />
      </Drawer>
    </div>
  );
};
