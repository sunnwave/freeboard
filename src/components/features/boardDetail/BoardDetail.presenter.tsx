import {
  Wrapper,
  BoardWrapper,
  BottomNavWrapper,
  ContentsWrapper,
  Count,
  Date,
  DetailContents,
  Header,
  HeaderIcon,
  IconWrapper,
  Image,
  LikeIcon,
  LikesContainer,
  LikeWrapper,
  NavButton,
  ProfileImg,
  TextWrapper,
  Title,
  UserName,
  Hr,
  Youtube,
} from './BoardDetail.styles';
import moment from 'moment';
import { IBoardDetailProps } from './BoardDetail.types';
import { formatAddress } from '../../../utils/formatAddress';
import YoutubePlayer from '../../commons/YoutubePlayer';
import { getYoutubeVideoId } from '../../../utils/getYoutubeVideoId';
import { Modal, Tooltip } from 'antd';

export default function BoardDetailUI(props: IBoardDetailProps) {
  return (
    <Wrapper>
      <BoardWrapper>
        <Header>
          <ProfileImg src={'/detailBoard/profile.png'} />
          <TextWrapper>
            <UserName>{props.data?.fetchBoard?.writer}</UserName>
            <Date>
              Date:
              {moment(props.data?.fetchBoard?.createdAt).format('YYYY.MM.DD')}
            </Date>
          </TextWrapper>
          <IconWrapper>
            <HeaderIcon src={'/detailBoard/ic_link.png'} />
            <Tooltip title={formatAddress(props.data?.fetchBoard?.boardAddress)} placement="top">
              <HeaderIcon src={'/detailBoard/ic_location.png'} />
            </Tooltip>
          </IconWrapper>
        </Header>
        {props.isModalOpen && (
          <Modal
            title={props.modalTitle}
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={props.isModalOpen}
            onOk={props.handleOk}
            okText="확인"
            onCancel={props.handleCancel}
            cancelText="취소"
          >
            <p>{props.message}</p>
          </Modal>
        )}
        <ContentsWrapper>
          <Title>{props.data?.fetchBoard?.title}</Title>
          {props.data?.fetchBoard.images?.map(
            img => img !== '' && <Image src={`https://storage.googleapis.com/${img}`} />,
          )}
          <DetailContents>{props.data?.fetchBoard?.contents}</DetailContents>
          <Youtube>
            {props.data?.fetchBoard?.youtubeUrl !== '' && (
              <YoutubePlayer
                videoId={getYoutubeVideoId(props.data?.fetchBoard?.youtubeUrl ?? '')}
              />
            )}
          </Youtube>

          <LikesContainer>
            <LikeWrapper>
              <LikeIcon src={'/detailBoard/ic_thumb_up.png'} />
              <Count style={{ color: '#FFD600' }}>{props.data?.fetchBoard?.likeCount}</Count>
            </LikeWrapper>
            <LikeWrapper>
              <LikeIcon src={'/detailBoard/ic_thumb_down.png'} />
              <Count style={{ color: '#828282' }}>{props.data?.fetchBoard?.dislikeCount}</Count>
            </LikeWrapper>
          </LikesContainer>
        </ContentsWrapper>
      </BoardWrapper>
      <BottomNavWrapper>
        <NavButton onClick={props.onClickToList}>목록으로</NavButton>
        <NavButton onClick={props.onClickUpdate}>수정하기</NavButton>
        <NavButton onClick={props.onClickDelete}>삭제하기</NavButton>
      </BottomNavWrapper>
      <Hr />
    </Wrapper>
  );
}
