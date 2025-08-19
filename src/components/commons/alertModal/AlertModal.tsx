import dynamic from 'next/dynamic';

const AntdModal = dynamic(() => import('antd').then(mod => mod.Modal), { ssr: false });

interface AlertModalProps {
  open: boolean;
  message: string | undefined;
  onClose: () => void;
}

export default function AlertModal({ open, message, onClose }: AlertModalProps) {
  return (
    <AntdModal title="알림" open={open} onOk={onClose} onCancel={onClose} centered>
      <p>{message}</p>
    </AntdModal>
  );
}
