import { Body, Table, Td, Th, Tr, RegisterButton, RegisterIcon, Wrapper } from './BoardList.styles';
import moment from 'moment';
import { IBoardListUIProps } from './BoardList.types';
import Search from '@/components/commons/Search/Search';
import { v4 as uuidv4 } from 'uuid';

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <Body>
        <Wrapper>
          <Search
            searchParams={props.searchParams}
            setSearchParams={props.setSearchParams}
            refetch={props.refetch}
          />
          <Table>
            <tbody>
              <Tr>
                <Th>번호</Th>
                <Th>제목</Th>
                <Th>작성자</Th>
                <Th>날짜</Th>
              </Tr>
              {props.data?.fetchBoards.map((el, index) => (
                <Tr key={el._id}>
                  <Td>{index + 1}</Td>
                  <Td className="title" onClick={props.onClickBoardToDetail} id={el._id}>
                    {el.title
                      .replaceAll(
                        props.searchParams.search ?? '',
                        `!@#${props.searchParams.search ?? ''}!@#`,
                      )
                      .split('!@#')
                      .map(el => (
                        <span
                          id={uuidv4()}
                          style={{
                            background: el === props.searchParams.search ? '#FFD600' : 'white',
                          }}
                        >
                          {el}
                        </span>
                      ))}
                  </Td>
                  <Td>{el.writer}</Td>
                  <Td>{moment(el.createdAt).format('YYYY.MM.DD')}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
          <RegisterButton onClick={props.onClickRegister}>
            <RegisterIcon src={'/boardsList/ic_register.png'} />
            게시물 등록하기
          </RegisterButton>
        </Wrapper>
      </Body>
    </>
  );
}
