import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardRegisterProps {
  data?: Pick<IQuery, "fetchBoard">;
  isUpdate?: boolean;
}

export interface ImyUpdateBoardInput {
  title?: string;
  contents?: string;
}

export interface IBoardRegisterUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  isUpdate?: boolean;
  onChangeWriter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  writerError: string;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordError: string;
  onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  titleError: string;
  onChangeContents: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  contentsError: string;
  // onChangeZipcode: () => void;
  // onChangeAddress: (address: string) => void;
  // onChangeAddressDetail: (addressDetail: string) => void;
  // onChangeYoutube: (url: string) => void;
  onClickRegister: () => Promise<void>;
  onClickUpdate: () => Promise<void>;
  buttonColor?: string;
}
