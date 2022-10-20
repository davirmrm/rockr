import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Portal from '../portal/portal';
import './alert.scss';

import { IcoClose } from '../icon/icon';
import { RemoveAlert } from './actions';
import { Button } from '../button/button';
export * from './actions';

export const Alert = () =>{
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alerts);

  return (
    <Portal name="alert">
    <>
      {alerts?.map((alert) => {
        setTimeout(
          function () {
            dispatch(RemoveAlert(alert.id))
          },
          alert.time ? alert.time : 3000
        );
        return (
          <div key={alert.id} className={`box-alert alert-${alert.type}`} >
            <div dangerouslySetInnerHTML={{ __html: alert.mensage }} ></div>
            <Button
              className="alert-close"
              onClick={() => dispatch(RemoveAlert(alert.id))}
            >
              <IcoClose />
            </Button>
          </div>
        );
      })}
      </>
    </Portal>
  );
}
