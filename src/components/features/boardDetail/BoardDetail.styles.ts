import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoardWrapper = styled.div`
  margin-bottom: 101px;
  padding: 80px 102px 80px 102px;
  /* width: 100%; */
  width: 1200px;
  min-height: 1600px;
  box-shadow: 0px 4px 20px 0px #00000033;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 80px;
`;

export const ProfileImg = styled.img`
  display: flex;
  width: 56px;
  height: 56px;
  padding: 5px;
  margin-right: 12px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 718px;
`;
export const UserName = styled.div`
  height: 36px;
  font-family: Noto Sans CJK KR;
  font-size: 24px;
  font-weight: 500;
  line-height: 35.52px;
  text-align: left;
  color: #000000;
`;
export const Date = styled.div`
  width: 126px;
  height: 24px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  text-align: left;
  color: #828282;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const HeaderIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 20px;
`;
export const LocationPop = styled.p`
  display: none;
`;
export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  height: 54px;
  font-family: Noto Sans CJK KR;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  line-height: 53.28px;
  text-align: left;
  margin-right: auto;
`;
export const Image = styled.img`
  /* width: 996px; */
  height: 480px;
  margin-bottom: 40px;
`;
export const DetailContents = styled.div`
  width: 996px;
  height: 96px;
  top: 1530px;
  left: 463px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  text-align: left;
  margin-bottom: 120px;
`;
export const Youtube = styled.div`
  width: 486px;
  height: 240px;
  margin-bottom: 160px;
`;
export const LikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  width: 120px;
`;
export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
`;
export const LikeIcon = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  :hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`;
export const Count = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-weight: 400;
  line-height: 26.64px;
  text-align: center;
  width: 40px;
  height: 27px;
`;
export const BottomNavWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
export const NavButton = styled.button`
  width: 179px;
  height: 45px;
  top: 2378px;
  left: 677px;
  /* padding: 14px 60px 14px 60px; */
  border: 1px solid #bdbdbd;
  background: #ffffff;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    color: white;
  }
`;
export const Hr = styled.hr`
  width: 1200px;
  border: 1px solid #bdbdbd;
  margin-top: 87px;
`;
