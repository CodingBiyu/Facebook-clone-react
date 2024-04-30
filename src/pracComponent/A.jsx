import "./A.css";

const Atag = (props) => {
  return <a className={props.className}>{props.children}</a>;
};

export default Atag;
