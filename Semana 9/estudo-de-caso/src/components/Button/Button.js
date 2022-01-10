import "./Button.css";

const Button = (props) => {
  const { children, variant, isLoading, disabled, ...rest } = props;
  // rest = {onClick: function}
  return (
    <button
      className={`button button__${variant}`}
      disabled={disabled || isLoading}
      {...rest} // onClick={onClick}
    >
      {isLoading ? "carregando..." : children}
    </button>
  );
};

export default Button;
