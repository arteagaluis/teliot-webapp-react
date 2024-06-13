'use client';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Image from 'next/image';

const Input = ({
  className = '',
  placeholder = '',
  size = 32,
  minLength = 3,
  maxLength = 64,
  required = true,
  type = 'text',
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  icon = '',
  value = '',
  name = '',
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <input
        className={styles.input}
        type={type}
        required={required}
        placeholder={placeholder}
        size={size}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        name={name}
      />
      {icon && (
        // <svg className={styles.icon} width="32" height="32">
        //   <image href={icon} width="100%" height="100%" />
        // </svg>

        <div className={styles.icon}>
          <Image src={icon} alt="Picture of the author" />
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.number,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  icon: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
