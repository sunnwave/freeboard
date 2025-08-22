import { ChangeEvent } from 'react';
import { IBoardAddressInput, IQuery } from '../../../commons/types/generated/types';
import { Address } from 'react-daum-postcode';

export interface IBoardRegisterProps {
  data?: Pick<IQuery, 'fetchBoard'>;
  isUpdate?: boolean;
}

export interface ImyUpdateBoardInput {
  title?: string;
  contents?: string;
  boardAddress?: IBoardAddressInput;
  youtube?: string;
}

export interface IBoardRegisterUIProps {
  data?: Pick<IQuery, 'fetchBoard'>;
  isUpdate?: boolean;
  onChangeWriter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  writerError: string;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordError: string;
  onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  titleError: string;
  onChangeContents: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  contentsError: string;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onToggleAddressModal: () => void;
  onToggleAlertModal: () => void;
  handleAddressComplete: (data: Address) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickRegister: () => Promise<void>;
  onClickUpdate: () => Promise<void>;
  buttonColor?: string;
  zipcode?: string;
  address?: string;
  isAddressModalOpen?: boolean;
  alertMessage?: string;
  isAlertModalOpen: boolean;
}
