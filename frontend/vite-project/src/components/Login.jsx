import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

useEffect(()=>{
      const auth =localStorage.getItem("user");
      if(auth){
        navigate("/")
      }
},[])

  const handlelogin = async () => {
    let result = await axios.post("http://localhost:3000/login", {
      email: email,
      password: password,
    });
    console.log(result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/")
    } else {
        alert("no user found with this detail");
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold ml-[27rem] mt-[3rem]">login</h1>
      <div className="flex flex-col ml-[29rem] mt-[1rem] ">
        <input
          type="text"
          placeholder="enter email"
          className="border-solid border-4 font-semibold mt-2 border-blue-800 w-[14rem] h-[2rem] p-2"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="enter password"
          className="border-solid border-4 font-semibold mt-2 border-blue-800 w-[14rem] h-[2rem] p-2"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button
          className="bg-black rounded-md text-white font-bold w-[6rem] mt-[1rem] ml-4"
          onClick={handlelogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
