import { ICommentListProps } from './CommentList.types';
import Comment from '../commentItem/Comment.container';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ScrollContainer } from './CommentList.styles';

export default function CommentListUI(props: ICommentListProps) {
  return (
    <ScrollContainer>
      <InfiniteScroll
        dataLength={props.data?.fetchBoardComments.length ?? 0}
        hasMore={props.hasMore}
        next={props.onLoadMore}
        loader={<h4>Loading...</h4>}
      >
        {props.data?.fetchBoardComments.map(el => (
          <Comment data={el} key={el._id} />
        ))}
      </InfiniteScroll>
    </ScrollContainer>
  );
}
