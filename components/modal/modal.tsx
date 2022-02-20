import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

interface Props {
  children: JSX.Element;
  visible: boolean;
  onClose?: () => void;
}

function Modal({ visible, onClose, children }: Props) {
  const onDismiss = () => {
    onClose && onClose();
  };

  return (
    <Dialog isOpen={visible} onDismiss={onClose}>
      <button className="close-button" onClick={onClose}>
        <span aria-hidden>×</span>
      </button>
      {children}
    </Dialog>
  );
}

export { Modal };
