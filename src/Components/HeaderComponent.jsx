import { Breadcrumb, Layout, Menu, theme } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const { Header, Content, Footer } = Layout;

function HeaderComponent() {
  return (
    <div>
      <Layout className="layout">
        <Header className="header">
          <div className="demo-logo" />
          <Menu theme="dark" mode="horizontal">
            <NavLink className="nav-bar-link" to="/">
              <HomeOutlined />
            </NavLink>
            <NavLink className="nav-bar-link" to="/AsynchronousRequests">
              Asynchronous Requests
            </NavLink>
            <NavLink className="nav-bar-link" to="/Components">
              Components
            </NavLink>
            <NavLink className="nav-bar-link" to="/Context">
              Context
            </NavLink>
            <NavLink className="nav-bar-link" to="/Events">
              Events
            </NavLink>
            <NavLink className="nav-bar-link" to="/Form">
              Form
            </NavLink>
            <NavLink className="nav-bar-link" to="/Fragment">
              Fragment
            </NavLink>
            <NavLink className="nav-bar-link" to="/Key">
              Key
            </NavLink>
            <NavLink className="nav-bar-link" to="/Lifecycle">
              Lifecycle
            </NavLink>
            <NavLink className="nav-bar-link" to="/NotFound">
              NotFound
            </NavLink>
            <NavLink className="nav-bar-link" to="/Props">
              Props
            </NavLink>
            <NavLink className="nav-bar-link" to="/ReactMemo">
              ReactMemo
            </NavLink>
            <NavLink className="nav-bar-link" to="/Refs">
              Refs
            </NavLink>
            <NavLink className="nav-bar-link" to="/Router">
              Router
            </NavLink>
            <NavLink className="nav-bar-link" to="/State">
              State
            </NavLink>
            <NavLink className="nav-bar-link" to="/UseEffect">
              UseEffect
            </NavLink>
            <NavLink className="nav-bar-link" to="/Virtual">
              Virtual
            </NavLink>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export default HeaderComponent;