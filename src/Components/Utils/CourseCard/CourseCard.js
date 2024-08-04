import { Button, Card, Row, Tag } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "../CourseCard/CourseCard.css";
export const CourseCard = (props) => {
  const course = props?.course;

  return (
    <div className="curved-card-container">
      <Card
        className="coursecard"
        cover={<img alt="example" src={course?.img} className="cover-image" />}
      >
        <div className="content">
          <Row>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                padding: "0px 5px 0px 5px",
                borderRadius: "11px",
              }}
            >
              {course?.title}
            </div>
          </Row>
          <Row
            style={{
              justifyContent: "space-between",
              padding: "5% 2% 2% 2%",
            }}
          >
            <Tag
              color="geekblue"
              style={{ fontSize: "10px", borderRadius: "5px" }}
            >
              Duration 1h 15m{" "}
            </Tag>{" "}
            <Tag
              color="geekblue"
              style={{ fontSize: "10px", borderRadius: "5px" }}
            >
              12 lessons
            </Tag>
          </Row>
          <Row>
            <div
              style={{
                width: "100%",
                minHeight: "30px",
                textWrap: "pretty",
                padding: "10px",
                borderRadius: "11px",
                marginBottom: "0px",
                fontSize: "12px",
                textAlign: "left",
              }}
            >
              {course?.description}
            </div>
          </Row>
          <Row >
            <div
              style={{
                fontSize: "12px",
                fontWeight: "600",
                padding: "0px 5px 0px 5px",
              }}
            >
              Career Outcome
            </div>
          </Row>
          <Row style={{paddingBlockEnd:'10px'}}>
            <div
              style={{
                whiteSpace:'pretty',
                width: "100%",
                textWrap: "pretty",
                padding: "5px 10px",
                fontSize: "12px",
                textAlign: 'left',
              }}
            >
              {course?.careerOutcome}
            </div>
          </Row>
          <Row>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "600",
                padding: "0px 5px 0px 5px",
              }}
            >
              What You Will Learn
            </div>
          </Row>
          <Row>
            <div
              style={{
                width: "100%",
                whiteSpace:'pretty',
                textWrap: "pretty",
                padding: "5px 10px",
                fontSize: "12px",
                textAlign: "left",
              }}
            >
              {course?.learningInsight}
            </div>
          </Row>
          <Row style={{ alignItems: "center", float: "right" }}>
            <Button className="enroll-button">
              Enroll
              <ArrowRightOutlined className="enroll-icon" />
            </Button>
          </Row>
          <Row className="clipArt">
            <svg
              className="sine-wave-background"
              viewBox="0 0 100 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0 Q 10 10, 20 0 T 40 0 T 60 0 T 80 0 T 100 0 V 10 H 0 Z"
                fill="#c2cbc95b"
              />
            </svg>
          </Row>
        </div>
      </Card>
    </div>
  );
};
