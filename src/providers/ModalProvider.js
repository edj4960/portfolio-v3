import React, { createContext, useRef, useState } from "react";

import './Modal.scss';


const ModalContext = createContext({
  setModal: () => {},
  openModal: () => {},
  closeModal: () => {}
});

const ModalProvider = props => {
  const [content, setContent] = useState();
  const modalRef = useRef();
  const containerRef = useRef();

  const setModal = (newcontent) => {
    setContent(newcontent);
  }

  const openModal = (newcontent) => {
    if (newcontent) {
      setContent(newcontent);
    }

    modalRef.current.style.display = 'block';
    setTimeout(() => {
      modalRef.current.classList.add('show');
    }, 100);
    setTimeout(() => {
      containerRef.current.classList.add('overflow-hidden');
    },300);
  }

  const closeModal = () => {
    modalRef.current.classList.add('hide');
    setTimeout(() => {
      modalRef.current.classList.remove('show');
      containerRef.current.classList.remove('overflow-hidden');
      setTimeout(() => {
        modalRef.current.classList.remove('hide');
        modalRef.current.style.display = 'none';
      }, 500);
    }, 300);
  }

  return (
    <ModalContext.Provider
      value={{
        setModal,
        openModal,
        closeModal
      }}
    >
      {props.children}
      <div className="modal" ref={modalRef}>
        <div className="modal-mask" onClick={closeModal} />
        <div className="modal-container" ref={containerRef}>
          <div className="bubble" />
          <div className="circle" />
          <div className="modal-content">
            <div className="exit" onClick={closeModal}>
              <div>X</div>
            </div>
            {content}
          </div>
        </div>
      </div>
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider };