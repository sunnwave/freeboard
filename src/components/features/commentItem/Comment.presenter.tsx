import * as C from './Comment.styles';
import moment from 'moment';
import { ICommentUIProps } from './Comment.types';

import CommentWrite from '../commentWrite/CommentWrite.container';
import PasswordModal from '../../commons/PasswordModal/PasswordModal';
import { Rate } from 'antd';

export default function CommentUI(props: ICommentUIProps) {
  return (
    <>
      {props.isDeleteModalOpen && (
        <PasswordModal
          title="댓글 삭제"
          isPasswordModalOpen={props.isDeleteModalOpen}
          onCancelPasswordModal={props.onCancelDeleteModal}
          onConfirmDeletePasswordModal={props.onConfirmDeleteBoardComment}
        ></PasswordModal>
      )}
      {props.isUpdate ? (
        <CommentWrite isUpdate={true} data={props.data} />
      ) : (
        <>
          <C.CommentWrappper key={props.data?._id}>
            <C.ProfileWrapper>
              <C.ProfileImg src="/commentRead/profile.png" />
              <C.ProfileInfoWrapper>
                <C.NameStarWrapper>
                  <C.UserName>{props.data?.writer}</C.UserName>
                  <Rate value={props.data?.rating || 0} disabled />
                </C.NameStarWrapper>
                <C.Comment>{props.data?.contents}</C.Comment>
                <C.Date>{moment(props.data?.createdAt).format('YYYY.MM.DD')}</C.Date>
              </C.ProfileInfoWrapper>
            </C.ProfileWrapper>
            <div>
              <C.IconButton onClick={() => props.onClickUpdateBoardComment(props.data?._id)}>
                <img src="/commentRead/ic_update.png" alt="Update Comment" />
              </C.IconButton>
              <C.IconButton onClick={() => props.onClickDeleteBoardComment(props.data?._id)}>
                <img src="/commentRead/ic_delete.png" alt="Delete Comment" />
              </C.IconButton>
            </div>
          </C.CommentWrappper>
        </>
      )}
    </>
  );
}
