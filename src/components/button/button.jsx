import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.scss';

export const Button = ({
  children,
  type = 'btn',
  color = 'default',
  variant = 'normal',
  size = 'medium',
  disabled = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={props.className ? props.className : `${type} ${color} ${variant} ${size} `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
