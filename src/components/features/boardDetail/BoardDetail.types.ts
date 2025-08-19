import { IQuery } from '../../../commons/types/generated/types';

export interface IBoardDetailProps {
  data?: Pick<IQuery, 'fetchBoard'>;
  onClickToList: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
  onToggleModal: () => void;
  handleOk?: () => void;
  handleCancel?: () => void;
  isModalOpen?: boolean;
  message?: string;
  modalTitle?: string;
}
