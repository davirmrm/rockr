import React from 'react';
import Portal from '../portal/portal';
import './loading.scss';

export const Loading = ({
  title = 'Carregando',
  icon = <div className="loader-default"></div>,
}) => {
  return (
    <Portal name="loading">
      <div className="box-loading">
        <div className="box-load">
          {icon}
          {title ? <h5>{title}</h5> : null}
        </div>
      </div>
    </Portal>
  );
};
