import React from 'react';
import cn from 'classnames';

type ButtonProps = {
  variant?: 'primary' | 'secondary',
  size?: 'sm' | 'lg'
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size,
  children
}) => {
  return <button className={cn('c-button', {
    [`c-button--${variant}`]: variant,
    [`c-button--${size}`]: size
  })}>{children}</button>
}

export default Button;