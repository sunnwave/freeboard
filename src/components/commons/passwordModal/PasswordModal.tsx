import dynamic from 'next/dynamic';
import { useState } from 'react';
import * as P from './PasswordModal.styles';

const Modal = dynamic(() => import('antd').then(mod => mod.Modal), { ssr: false });

interface IPasswordModalProps {
  isPasswordModalOpen: boolean;
  title: string;
  onConfirmDeletePasswordModal: (password: string) => Promise<void>;
  onCancelPasswordModal: () => void;
}

export default function PasswordModal(props: IPasswordModalProps) {
  const [password, setPassword] = useState('');
  return (
    <Modal
      centered
      title={props.title}
      open={props.isPasswordModalOpen}
      onOk={() => props.onConfirmDeletePasswordModal(password)}
      onCancel={props.onCancelPasswordModal}
    >
      <P.subTitle>비밀번호를 입력해주세요.</P.subTitle>
      <P.passwordInput
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      ></P.passwordInput>
    </Modal>
  );
}
