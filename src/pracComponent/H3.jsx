import "./H3.css";

const H3 = (props) => {
  return <h3 className={props.className}> {props.children}</h3>;
};

export default H3;
