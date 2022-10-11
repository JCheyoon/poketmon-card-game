import React, { createContext, useContext, useState } from "react";

type ShowModalProps = {
  title: string;
  message: string;
  onHideFn?: () => void;
};
type ProviderProps = {
  children: React.ReactNode;
};

export type ModalContextType = {
  show: boolean;
  title: string | undefined;
  message: string | undefined;
  showModal: ({ title, message }: ShowModalProps) => void;
  hideModal: () => void | undefined;
};

const ModalContext = createContext({} as ModalContextType);

export const ModalProvider = ({ children }: ProviderProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string | undefined>("");
  const [message, setMessage] = useState<string | undefined>("");
  const [onHideAction, setOnHideAction] = useState<() => void | undefined>();

  const showModalHandler = ({ title, message, onHideFn }: ShowModalProps) => {
    setShow(true);
    setTitle(title);
    setMessage(message);
    if (onHideFn) {
      setOnHideAction(onHideFn);
    }
  };
  const hideModalHandler = () => {
    setShow(false);
    setTitle("");
    setMessage("");
    if (onHideAction) {
      onHideAction();
    }
    setOnHideAction(undefined);
  };

  const value = {
    show,
    title,
    message,
    showModal: showModalHandler,
    hideModal: hideModalHandler,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useContextModal = () => {
  return useContext(ModalContext);
};
