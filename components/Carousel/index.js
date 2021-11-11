import { Carousel as Ca } from "antd";
import { Wrapper } from "./Carousel.style";
import Image from 'next/image'
import image1 from "../../public/image/Group 232.png"

const Carousel = () => (
  <Wrapper>
    <Ca autoplay>
      <div className="carouselChild">
        <Image src={image1} layout="responsive" alt="random Image"></Image>
      </div>
    </Ca>
  </Wrapper>
);

export default Carousel;
