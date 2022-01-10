import "./Text.css";

const Text = (props) => {
  const { as = "p", children, fontSize = "md", className = "" } = props;

  const Component = as;
  return (
    <Component
      className={`font-${fontSize}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Component>
  );
};

export default Text;
