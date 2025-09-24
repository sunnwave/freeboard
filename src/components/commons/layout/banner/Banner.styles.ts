import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`;

export const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

export const CustomArrow = styled.div<{ direction: 'left' | 'right' }>`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => (props.direction === 'left' ? 'left: 375px;' : 'right: 375px;')}
  z-index: 10;
  cursor: pointer;
  /* transition: background 0.3s; */

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

export const Slide = styled.div`
  height: 400px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  padding: 96px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-family: 'Noto Sans CJK KR', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-family: 'Noto Sans CJK KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0px;
  white-space: pre-line;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
