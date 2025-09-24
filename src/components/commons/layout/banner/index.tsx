import { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CarouselWrapper, CustomArrow, Image, Slide, Text, Title } from './Banner.styles';
import { carouselItems } from '../../../../data/carouselItems';

export default function Banner() {
  const carouselRef = useRef<any>(null);

  return (
    <>
      <CarouselWrapper>
        <CustomArrow direction="left" onClick={() => carouselRef.current.prev()}>
          <LeftOutlined style={{ fontSize: '24px', color: '#000' }} />
        </CustomArrow>
        <CustomArrow direction="right" onClick={() => carouselRef.current.next()}>
          <RightOutlined style={{ fontSize: '24px', color: '#000' }} />
        </CustomArrow>

        <Carousel
          ref={carouselRef}
          infinite={true}
          draggable={true}
          prevArrow={
            <CustomArrow direction="left">
              <LeftOutlined />
            </CustomArrow>
          }
          nextArrow={
            <CustomArrow direction="right">
              <RightOutlined />
            </CustomArrow>
          }
        >
          {carouselItems.map((el, index) => (
            <Slide key={index}>
              <Image src={el.image} alt={el.title} />
              <div>
                <Title>{el.title}</Title>
                <Text>{el.text}</Text>
              </div>
            </Slide>
          ))}
        </Carousel>
      </CarouselWrapper>
    </>
  );
}
