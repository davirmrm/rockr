import React, { ReactNode } from 'react';
import Portal from '../portal/portal';
import './modal.scss';
import { IcoClose } from '../icon/icon';
import { Button } from '../button/button';

export const Modal = ({
  title,
  children,
  open = false,
  close,
  closeText = 'Fechar',
  size = 'medium',
  actions,
}) => {
  //VERIFICAR SE ESSA CONDIÇÃO AINDA FAZ O QUE É ESPERADO DELA
  if (!Array.isArray(children)) {
    children = [children];
  }
  return (
    <Portal name="modal">
      {open
        ? size === 'fullscreen'
          ? fullscreen({ title, open, children, size, closeText, close, actions })
          : modalNormal({ title, open, children, size, closeText, close, actions })
        : null}
    </Portal>
  );
};

const fullscreen = ({ title, children, closeText, close, actions, cy }) => {
  return (
    <div className={`box-modal fullScreen`}>
      <div className="modal-header" >
        {title}
        {actions ? (
          <div className="modal-actions" >
            <Button className="btn secondary normal" onClick={close}>
              {closeText}
            </Button>
            {actions}
          </div>
        ) : null}
      </div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

const modalNormal = ({
  title,
  children,
  size,
  closeText,
  close,
  actions,
  cy
}) => {
  return (
    <div className={`box-modal`} >
      <div className={`size-${size}`}>
        <div className="modal-header" >
          <div>{title}</div>
          <Button className="modal-close" onClick={close} title={closeText} >
            <IcoClose />
          </Button>
        </div>
        <div className="modal-content">{children}</div>
        {actions ? (
          <div className="modal-actions">
            <Button color="secondary" onClick={close}>
              {closeText}
            </Button>
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  );
};
