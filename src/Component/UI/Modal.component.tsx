import ReactDOM from "react-dom";

import {
  BackDropContainer,
  Content,
  Footer,
  Header,
  OverlayContainer,
} from "./Modal.style";
import Button from "./Button.component";
import { useContextModal } from "../Context/modalContext";

type ModalProps = {
  title: string | undefined;
  message: string | undefined;
  onHide: () => void | undefined;
};

type prop = {
  onHide: () => void | undefined;
};
const Backdrop = ({ onHide }: prop) => {
  return <BackDropContainer onClick={onHide} />;
};

const ModalOverlay = ({ title, message, onHide }: ModalProps) => {
  return (
    <OverlayContainer>
      <Header>
        <h2>{title}</h2>
      </Header>
      <Content>
        <p>{message}</p>
      </Content>
      <Footer>
        <Button clickHandler={onHide} message="RESTART" />
      </Footer>
    </OverlayContainer>
  );
};

const Modal = () => {
  const { title, message, show, hideModal } = useContextModal();
  return show ? (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHide={hideModal} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onHide={hideModal} />,
        document.getElementById("modal-root") as HTMLElement
      )}
    </>
  ) : null;
};

export default Modal;
