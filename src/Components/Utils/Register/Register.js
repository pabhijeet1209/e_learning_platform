import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col, Divider } from "antd";

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [otpScreen, setOtpScreen] = useState(false);
  let noOfOtpForms = [1, 2, 3, 4];

  const handleRegister = (values) => {
    setOtpScreen(true);
    console.log("Form values:", values);
  };

  const GoogleIcon = () => (
    <svg
      width="20px"
      height="20px"
      viewBox="-0.5 0 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Google-color</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Icons"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Color-" transform="translate(-401.000000, -860.000000)">
          <g id="Google" transform="translate(401.000000, 860.000000)">
            <path
              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
              id="Fill-1"
              fill="#FBBC05"
            ></path>
            <path
              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
              id="Fill-2"
              fill="#EB4335"
            ></path>
            <path
              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
              id="Fill-3"
              fill="#34A853"
            ></path>
            <path
              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
              id="Fill-4"
              fill="#4285F4"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="20" fill="#0077B5" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z"
        fill="white"
      />
    </svg>
  );

  const otpForm = () =>
    noOfOtpForms.map(() => (
      <Form.Item name="otp" rules={[{ required: true }]}>
        <Input style={{ borderRadius: "10px", width: "35px" }} />
      </Form.Item>
    ));

  return (
    <div>
      {!otpScreen ? (
        <div style={{ overflow: "hidden" }}>
          <div style={{position:'relative', zIndex: 2 }}>
            <Row justify="center">
              <span
                style={{
                  color: "gray",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "lighter",
                }}
              >
                SAM LMS
              </span>
            </Row>
            <Row
              justify="center"
              style={{
                margin: "16px 0",
                color: "gray",
                fontSize: "14px",
                fontWeight: "300",
                display: "flex",
                rowGap: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                }}
              >
                Register your account.
              </div>
              <div>Welcome back! Select a method to register.</div>
            </Row>
            <Row gutter={16} justify="center" style={{ margin: "16px 0" }}>
              <Col>
                <Button
                  icon={<GoogleIcon />}
                  style={{
                    width: "100%",
                    border: "none",
                    borderRadius: "25px",
                  }}
                >
                  Google
                </Button>
              </Col>
              <Divider
                type="vertical"
                style={{
                  marginTop: "8px",
                  height: "20px",
                  borderRadius: "100%",
                  borderWidth: "1px",
                  fontSize: "12px",
                  borderColor: "black",
                }}
              />
              <Col>
                <Button
                  icon={<LinkedInIcon />}
                  style={{ width: "100%", border: "none" }}
                >
                  LinkedIn
                </Button>
              </Col>
            </Row>
            <Row
              justify="center"
              style={{ margin: "10px 0", fontSize: "12px", color: "grey" }}
            >
              <span>Or continue with email or mobile</span>
            </Row>
            <Form
              name="register"
              initialValues={{ remember: true }}
              onFinish={handleRegister}
              disabled={false}
            >
              <Form.Item
                name="userName"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input
                  placeholder="Full name"
                  style={{ borderRadius: "25px" }}
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email/phone!" },
                ]}
              >
                <Input
                  placeholder="Email or Phone"
                  style={{ borderRadius: "25px" }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onClick: () => setPasswordVisible(!passwordVisible),
                  }}
                  style={{ borderRadius: "25px" }}
                />
              </Form.Item>

              <Row gutter={16} align="middle">
                <Col span={12}>
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Col>
                <Col
                  span={12}
                  style={{ textAlign: "right", marginBottom: "18px" }}
                >
                  <a href="/forgot-password">Forgot password?</a>
                </Col>
              </Row>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%", borderRadius: "25px" }}
                >
                  Log In
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div style={{ zIndex: 1 }}>
            <svg
              width="200"
              height="300"
              viewBox="0 0 200 300"
              style={{
                position: "absolute",
                top: "0%",
                right: "0%",
                left: "0%",
                opacity: "0.1",
              }}
            >
              <circle class="circle one" cx="100" cy="10" r="70" fill="gray" />
            </svg>
          </div>
          <div style={{ zIndex: 0 }}>
            <svg
              width="200"
              height="300"
              viewBox="0 0 200 300"
              style={{
                position: "absolute",
                top: "0%",
                left: "0%",
                opacity: "0.11",
              }}
            >
              <circle class="circle one" cx="100" cy="10" r="100" fill="gray" />
            </svg>
          </div>
        </div>
      ) : (
        <div>
          <Col>
            <center style={{ fontSize: "18px", color: "#bd0b3b" }}>OTP</center>
            <div style={{color:"#b5b0b1",margin:"10px 0px 20px 0px"}}>
              A four digit code has been sent to eMail or mobile number{" "}
            </div>
            <Form
              name="otp"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              {otpForm()}
            </Form>
          </Col>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
