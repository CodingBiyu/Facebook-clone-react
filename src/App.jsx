import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import H1 from "./pracComponent/H1";
import H3 from "./pracComponent/H3";
import Atag from "./pracComponent/A";
import P from "./pracComponent/p";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmailChange = (e) => {
    console.log(email);
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    console.log(pass);
    setPass(e.target.value);
  };

  const handleButtonClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      alert("Email is valid!");
    } else {
      alert("Please enter a valid email address!");
    }

    if (pass >= 5) {
      alert("Password valid!");
    } else {
      alert("Invalid!, Password should be more than 4 characters ");
    }
  };
  return (
    <div className="main">
      <div className="left">
        <H1 className="blue">facebook</H1>
        <H3>
          Facebook helps you connect and share with the people in your life.
        </H3>
      </div>
      <div className="right">
        <div className="login">
          <input
            type="email"
            placeholder="Email"
            defaultValue={email}
            onChange={handleEmailChange}
            required></input>
          <input
            type="password"
            placeholder="Password"
            defaultValue={pass}
            onChange={handlePassChange}
            required></input>
          <Button onClick={handleButtonClick} className="Login-button">
            Log in
          </Button>
          <Atag className="a">Forgotten password?</Atag>
          <p>
            ____________________________________________________________________________________
          </p>
          <Button className="bg-green">Create new account</Button>
        </div>
        <P className="p">
          <b>
            <Atag className="a new-page">Create a Page </Atag>
          </b>
          for a celebrity, brand or business.
        </P>
      </div>
    </div>
  );
}

export default App;
