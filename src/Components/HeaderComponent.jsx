import { Breadcrumb, Layout, Menu, theme } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";

const { Header, Content, Footer } = Layout;

function HeaderComponent() {
  return (
    <Layout>
      <div className="main">
        <Header>
          <Menu className="menu" mode="horizontal" theme="dark">
            {" "}
            <Menu.Item key="1">
              <NavLink className="nav-bar-link" to="/">
                <HomeOutlined />
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink className="nav-bar-link" to="/AsynchronousRequests">
                <nobr>Asynchronous Requests</nobr>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink className="nav-bar-link" to="/Components">
                Components
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink className="nav-bar-link" to="/Context">
                Context
              </NavLink>
            </Menu.Item>
            <Menu.Item key="5">
              <NavLink className="nav-bar-link" to="/Events">
                Events
              </NavLink>
            </Menu.Item>
            <Menu.Item key="6">
              <NavLink className="nav-bar-link" to="/Form">
                Form
              </NavLink>
            </Menu.Item>
            <Menu.Item key="7">
              <NavLink className="nav-bar-link" to="/Fragment">
                Fragment
              </NavLink>
            </Menu.Item>
            <Menu.Item key="8">
              <NavLink className="nav-bar-link" to="/Key">
                Key
              </NavLink>
            </Menu.Item>
            <Menu.Item key="9">
              <NavLink className="nav-bar-link" to="/Lifecycle">
                Lifecycle
              </NavLink>
            </Menu.Item>
            {/* <NavLink className="nav-bar-link" to="/NotFound">
                NotFound
              </NavLink> */}
            <Menu.Item key="10">
              <NavLink className="nav-bar-link" to="/Props">
                Props
              </NavLink>
            </Menu.Item>
            <Menu.Item key="11">
              <NavLink className="nav-bar-link" to="/ReactMemo">
                ReactMemo
              </NavLink>
            </Menu.Item>
            <Menu.Item key="12">
              <NavLink className="nav-bar-link" to="/Refs">
                Refs
              </NavLink>
            </Menu.Item>
            <Menu.Item key="13">
              <NavLink className="nav-bar-link" to="/Router">
                Router
              </NavLink>
            </Menu.Item>
            <Menu.Item key="14">
              <NavLink className="nav-bar-link" to="/State">
                State
              </NavLink>
            </Menu.Item>
            <Menu.Item key="15">
              <NavLink className="nav-bar-link" to="/UseEffect">
                UseEffect
              </NavLink>
            </Menu.Item>
            <Menu.Item key="16">
              <NavLink className="nav-bar-link" to="/Virtual">
                Virtual
              </NavLink>
            </Menu.Item>
          </Menu>
        </Header>
      </div>
    </Layout>
  );
}

export default HeaderComponent;
