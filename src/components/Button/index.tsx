import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export const Button = ({
  isOutlined = false,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.button} ${
        styles.isOutlined ? styles.isOutlined : ''
      }`}
      {...props}
    />
  );
};
