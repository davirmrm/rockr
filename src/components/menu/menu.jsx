import React from 'react';
import { useLocation } from 'react-router-dom';
import { history } from '../../helpers/history';
import './menu.scss';

export const Menu = ({ children, data, action = () => null }) => {
  const location = useLocation();
  const isActive = (address) => location.pathname === address;
  const actionMenu = (e) => {
    if (e.url) {
      window.open(e.url, '_blank');
    }
    if (e.go) {
      history.push(e.go);
    }
    action(e);
  };

  return (
    <div className="menu">
      {data && data.length
        ? data.map((item) => {
            return (
              <button
                key={item.id}
                className={isActive(item.go) ? 'active' : ''}
                onClick={() => actionMenu(item)}
              >
                <span>{item.icon ? item.icon : null} {item.label}</span>
              </button>
            );
          })
        : null}

      {children}
    </div>
  );
};
