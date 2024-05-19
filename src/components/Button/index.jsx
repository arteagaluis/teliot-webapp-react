import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Button = ({
  name,
  type = 'button',
  onClick = () => {},
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {name}
    </button>
  );
};

// Definir los tipos de las props
Button.propTypes = {
  name: PropTypes.string.isRequired, // name es obligatorio y debe ser una cadena
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // type debe ser uno de estos valores
  onClick: PropTypes.func, // onClick debe ser una función
  className: PropTypes.string, // className debe ser una cadena
};

export default Button;
