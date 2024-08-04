import { Avatar, Menu, } from "antd";
import React from "react";
import "./Header.css";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <header
      style={{
        background: "white",
        position: "sticky",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: "9999",
      }}
    >
      <div style={{ minWidth: "30%" }}>
        <Menu
          mode="horizontal"
          className="header-menu"
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
          }}
        >
          <Menu.Item className="item" key="home">
            <a className="nav-item" href="#home">
              Home
            </a>
          </Menu.Item>
          <Menu.Item className="item" key="courses">
            <a className="nav-item" href="#courses">
              Courses
            </a>
          </Menu.Item>
          <Menu.Item className="item" key="testimonials">
            <a className="nav-item" href="#testimonials">
              Testimonials
            </a>
          </Menu.Item>
          <Menu.Item className="item" key="about">
            <a className="nav-item" href="#about">
              About
            </a>
          </Menu.Item>
        </Menu>
      </div>
      <div class="profile-card">
        <p class="username">John Doe</p>
        <Avatar icon={<UserOutlined />} />
      </div>
    </header>
  );
};

export default Header;
