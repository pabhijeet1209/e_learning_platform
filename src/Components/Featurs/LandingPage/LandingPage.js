// eslint-disable-next-line
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Drawer } from "antd";
import { React, useRef, useState } from "react";
import "typeface-poppins";
import "../../../App.css";
import { CourseCard } from "../../Utils/CourseCard/CourseCard";
import { courses, testimonials, usp } from "./Const";
import "./LandingPage.css";
import { TextWithHrLine } from "../../Utils/TextWithHrLine/TextWithHrLine";
import { UspCard } from "../../Utils/UspCard/UspCard";
import Person from "../../Assets/bgImage.png";
import Shadow from "../../Assets/shadow.png";
import LoginForm from "../UserLogin/Login";
import { Footer } from "../Footer/Footer";

export const LandingPage = () => {
  const sliderRef = useRef(null);
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  // eslint-disable-next-line
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <main>
      <div>
        <section id="home" className="hero">
          <div className="hero-text" style={{ display: "flex" }}>
            <div className="home-page-asset" style={{ marginLeft: "-5%" }}>
              <img
                className="shadow"
                src={Shadow}
                alt="shadow"
                style={{ height: "550px" }}
              />
              <img
                className="person"
                src={Person}
                alt="person"
                style={{ height: "550px" }}
              />
            </div>
            <div>
              <h1
                style={{
                  fontFamily: "typeface-poppins",
                }}
              >
                Welcome to Our E-Learning Platform
              </h1>
              <p style={{ fontWeight: "300" }}>
                Expand your knowledge and skills with our expert-led courses.
                Learn at your own pace and achieve your career goals.
              </p>
            </div>
            <div className="circle-container" style={{ rotate: "45deg" }}>
              <svg width="200" height="300" viewBox="0 0 200 300">
                <circle
                  class="circle one"
                  cx="100"
                  cy="100"
                  r="50"
                  fill="gray"
                />
                <circle
                  class="circle two"
                  cx="100"
                  cy="150"
                  r="50"
                  fill="gray"
                />
                <circle
                  class="circle three"
                  cx="100"
                  cy="200"
                  r="50"
                  fill="gray"
                />
              </svg>
            </div>
            <div
              style={{
                position: "absolute",
                width: "22%",
                left: "80%",
                bottom: "60%",
                zIndex: "0",
              }}
            >
              <svg
                class="absolute -top-64 -right-64 opacity-100 MuiBox-root muiltr-x3mbcd"
                viewBox="0 0 220 192"
                fill="none"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="8"
                      height="8"
                      fill="rgb(134, 154, 223)"
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="220"
                  height="192"
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                ></rect>
              </svg>
            </div>
            <div
              style={{
                zIndex: "222",
                position: "relative",
                width: "200px",
                marginLeft: "-35%",
                marginBottom: "16%",
                display: "flex",
                justifyContent: "space-around  ",
              }}
            >
              <Button className="login-button" onClick={() => setOpen(true)}>
                Login
              </Button>
              <Button className="register-button">Register</Button>
            </div>
            <div className="circle-container2" style={{ rotate: "320deg" }}>
              <svg width="200" height="300" viewBox="0 0 200 300">
                <circle
                  class="circle two"
                  cx="100"
                  cy="150"
                  r="50"
                  fill="gray"
                />
                <circle
                  class="circle three-container2"
                  cx="100"
                  cy="200"
                  r="50"
                  fill="gray"
                />
              </svg>
            </div>
          </div>
        </section>

        <section id="courses" className="courses">
          <h2>
            <TextWithHrLine data={{ text: "Our Courses", color: "white" }} />
          </h2>
          <Row gutter={16}>
            {/* <Button className="arrow-button left" onClick={scrollLeft}>
              <LeftOutlined />
            </Button> */}
            <div className="card-slider-container" ref={sliderRef}>
              {courses.map((course, index) => (
                <Col span={6} key={index}>
                  <CourseCard course={course} />
                </Col>
              ))}
            </div>
            {/* <Button className="arrow-button right" onClick={scrollRight}>
              <RightOutlined />
            </Button> */}
          </Row>
        </section>

        <section id="usp" className="usp">
          <h2>
            <TextWithHrLine
              data={{
                text: "Our Recipe to Transform Your Career",
                color: "white",
              }}
            />
          </h2>
          <Row className="usp-body" gutter={16}>
            {usp.map((usp, index) => (
              <Col span={8} key={index}>
                <UspCard data={[usp, index]} />
              </Col>
            ))}
          </Row>
        </section>

        <section id="testimonials" className="testimonials">
          <h2>
            <TextWithHrLine
              data={{ text: "What Our Students Say", color: "white" }}
            />
          </h2>
          <Row gutter={16}>
            {testimonials.map((testimonial, index) => (
              <Col span={8} key={index}>
                <Card bordered={false}>
                  <p>
                    <strong>{testimonial.name}</strong>
                  </p>
                  <p>{testimonial.text}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
        <aside style={{}}>
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
            <LoginForm />
          </Drawer>
        </aside>
        <Footer/>
      </div>
    </main>
  );
};
