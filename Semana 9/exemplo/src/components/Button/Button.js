import { Fragment } from "react";
import "./Button.css";

const Button = (props) => {
  console.log(props);
  const { children, variant } = props;

  return (
    <Fragment>
      <button className={`button button__${variant}`}>{children}</button>
    </Fragment>
  );
};

export default Button;
