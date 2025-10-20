import { ICommentListProps } from './CommentList.types';
import Comment from '../commentItem/Comment.container';
import { ScrollContainer } from './CommentList.styles';
import InfiniteScroll from 'react-infinite-scroller';

export default function CommentListUI(props: ICommentListProps) {
  return (
    <ScrollContainer>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={props.hasMore}
        loader={<h4 key={0}>Loading...</h4>}
      >
        {props.data?.fetchBoardComments.map(el => (
          <Comment data={el} key={el._id} />
        ))}
      </InfiniteScroll>
    </ScrollContainer>
  );
}
