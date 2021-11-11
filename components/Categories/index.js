import { Wrapper, Content } from "./Categories.style";
import { Card } from "antd";

const Categories = () => (
  <Wrapper>
    <Content>
      <Card
        className="card"
        hoverable
        style={{ width: 450, height: 250, backgroundColor: "#EAE9E7" }}
      >
        <span>T-SHIRT</span>
      </Card>
      <Card
        className="card"
        hoverable
        style={{ width: 450, height: 250, backgroundColor: "#FAFAFA" }}
      >
        <span>BAG</span>
      </Card>
      <Card
        className="card"
        hoverable
        style={{ width: 450, height: 250, backgroundColor: "#EAE9E7" }}
      >
        <span>SHOES</span>
      </Card>
      <Card
        className="card"
        hoverable
        style={{ width: 450, height: 250, backgroundColor: "#FAFAFA" }}
      >
        <span>MORE</span>
      </Card>
    </Content>
  </Wrapper>
);

export default Categories;
