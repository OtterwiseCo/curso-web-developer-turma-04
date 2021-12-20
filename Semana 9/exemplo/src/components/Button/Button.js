import "./Button.css";

const Button = (props) => {
  console.log(props);
  const { children, variant } = props;

  return <button className={`button button__${variant}`}>{children}</button>;
};

export default Button;
