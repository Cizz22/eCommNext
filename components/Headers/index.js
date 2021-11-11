import { Wrapper, Content } from "./Headers.style";
import { UserOutlined, ShoppingCartOutlined ,SearchOutlined  } from "@ant-design/icons";
import { Input } from "antd";

const Headers = () => {
  return (
    <Wrapper>
      <Content>
        <span className="logo">ATRA E-COMM</span>
        <Input className="input" bordered placeholder="Search" prefix={<SearchOutlined />}/>
        <div className="userCart">
        <UserOutlined />
        <ShoppingCartOutlined />
        </div>
      </Content>
      <Content>
        <div className="links">
        <div>
             <a>HOME</a> 
          </div>
          <div>
              <a>STORE</a> 
          </div>
          <div>
              <a>ABOUT US</a> 
          </div>
          <div>
              <a>CONTACT US</a> 
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Headers
