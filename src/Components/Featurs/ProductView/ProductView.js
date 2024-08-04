import React from "react";
import { Avatar, Card, Col, Row } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./ProductView.css";
import {
  CourseInfo,
  StampData,
  ToolsSize,
  courseProjects,
  termsData,
} from "./Const";
import { StampCard } from "../../Utils/StampCard/StampCard";
import { LinuxSvg } from "../../Assets/CoursesSVG/LinuxSvg";
import { AnsibleSvg } from "../../Assets/CoursesSVG/AnsibleSvg";
import { AwsSvg } from "../../Assets/CoursesSVG/AwsSvg";
import { DockerSvg } from "../../Assets/CoursesSVG/DockerSvg";
import { GithubSvg } from "../../Assets/CoursesSVG/GithubSvg";
import { KubernetesSvg } from "../../Assets/CoursesSVG/KubernetesSvg";
import { MavenSvg } from "../../Assets/CoursesSVG/MavenSvg";
import { PythonSvg } from "../../Assets/CoursesSVG/PythonSvg";
import { UspCard } from "../../Utils/UspCard/UspCard";
import { PaymentInfo } from "../Payment/PaymentInfo";
import { CircleClip } from "../../Utils/CustomClip/CircleClip";
import { Footer } from "../Footer/Footer";

const ProductView = () => {
  const content = CourseInfo?.course_content ?? [];

  const getContent = (type, value) => {
    switch (type) {
      case "AnimatedSlider":
        return value?.map((data, index) => (
          <StampCard key={index} data={data} />
        ));

      case "paragraph":
        return <>{value}</>;

      case "UspCard":
        return value.map((usp, index) => (
          <Col span={8} key={index}>
            <UspCard data={[usp, index]} />
          </Col>
        ));

      case "List":
        return value.map((row, index) => (
          <div style={{ width: "220px" }} key={index}>
            <Row
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "220px",
                fontSize: "12px",
              }}
            >
              <Row style={{ width: "20px", marginTop: "3px" }}>
                <CheckCircleOutlined style={{ color: "green" }} />
              </Row>
              <Row style={{ width: "200px" }}>
                <span style={{ color: "GrayText" }}>{row}</span>
              </Row>
            </Row>
          </div>
        ));

      default:
        return <div>Unknown status.</div>; // Fallback for unknown types
    }
  };

  return (
    <div className="product-view">
      <div className="course-container">
        <div className="course-content">
          <div className="course-info">
            <Card
              title={
                <div>
                  <Row>
                    <Avatar
                      src={CourseInfo?.course_image}
                      size={100}
                      style={{
                        marginRight: "10%",
                      }}
                    />
                    <Col>
                      <Col style={{ fontSize: "15px" }}>
                        {CourseInfo?.course_title}
                      </Col>
                      <Col style={{ color: "#989a9c" }}>
                        {CourseInfo?.course_sub_title}
                      </Col>
                    </Col>
                  </Row>
                </div>
              }
              style={{
                width: "100%",
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
                height: "20%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img
                alt="example"
                src={CourseInfo?.course_preview_image}
                style={{ height: "250px", width: "100%" }}
              />
              <span className="course-clip-art">
                <CircleClip />
              </span>
            </Card>
            <div className="info-key" style={{ marginTop: "1%" }}>
              Tools Covered
            </div>
            <div className="info-value">
              <Col>
                <LinuxSvg data={ToolsSize} />
              </Col>
              <Col>
                <PythonSvg data={ToolsSize} />
              </Col>
              <Col>
                <AwsSvg data={ToolsSize} />
              </Col>
              <Col>
                <DockerSvg data={ToolsSize} />
              </Col>
              <Col>
                <AnsibleSvg data={ToolsSize} />
              </Col>
              <Col>
                <GithubSvg data={ToolsSize} />
              </Col>
              <Col>
                <KubernetesSvg data={ToolsSize} />
              </Col>
              <Col>
                <MavenSvg
                  data={{
                    height: "80px",
                    width: "100px",
                  }}
                />
              </Col>
            </div>
            {content.map((data, index) => (
              <div key={index}>
                <div className="info-key">{data?.key}</div>
                <div className="info-value">
                  {getContent(data?.display_type, data?.value)}
                </div>
              </div>
            ))}
          </div>
          <div className="payment-info">
            <PaymentInfo />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductView;
