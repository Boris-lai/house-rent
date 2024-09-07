// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import styled from "styled-components";

const CardDetailsTitle = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Description = styled.p`
  color: #312e81;
  font-size: 1.6rem;
  letter-spacing: 0.5;
  padding: 2.4rem 0;
`;

const Name = styled.div`
  font-size: 1.8rem;
  color: #001d3d;
`;

const Price = styled.div`
  font-size: 1.8rem;
  color: #606c38;
`;

function CardDetails({ house, onCloseModal }) {
  const { name, regularPrice, images, description } = house;

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <img src={images[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[2]} />
        </SwiperSlide> */}
      </Swiper>
      <CardDetailsTitle>
        <Name>{name}</Name>
        <Price>$ {regularPrice}</Price>
      </CardDetailsTitle>

      <Description>{description}</Description>
    </>
  );
}

export default CardDetails;
