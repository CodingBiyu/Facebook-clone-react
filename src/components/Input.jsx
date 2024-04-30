import "./Input.css";

// const Input = ({ placeholder, className, name }) => {
//   return (
//     <div>
//       <input
//         className={`input ${className}`}
//         placeholder={placeholder}
//         name={name}></input>
//     </div>
//   );
// };

// export default Input;

const Input = ({ className, placeholder, type }) => {
  return (
    <input className={className} placeholder={placeholder} type={type}></input>
  );
};

export default Input;
