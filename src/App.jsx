// import React, { useState } from 'react'

// const App = () => {
//   const [data , setData] = useState(0)
//   const increement = ()=>{
//     setData(data+1)
//   }
//   const decrement = ()=>{
//    if(data > 0){
//     setData(data -1)
//    }
//   }
//   return (
//     <>
//       <h1>Version : {data}</h1>
//       <button onClick={() => increement()}>Increment</button>
//       <button onClick={() => decrement()}>Decrement</button>
//     </>
//   );
// }

// export default App
import { useEffect, useState } from "react";

import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  axios.defaults.baseURL = "https://practice-backend-two.vercel.app/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const res = await axios.post("/createUser", {
          email: email,
          pass: pass,
        });
        setEmail(res.data.email);
        setPass(res.data.pass);
      } catch (error) {
        console.log(error);
      }
    };
    postData();
  };
  useEffect(() => {
    const getName = async () => {
      try {
        const res = await axios.get(
          "/getName",
          {
            headers: {
              Authorization: "Abhishek Soni",
              xcustom: "mycustom",
            },
            params: {
              id: "1234@",
            },
          });
        setName(res.data.name);
      } catch (error) {
        console.log(error);
      }
    };
    getName();
  }, [name]);
  return (
    <div>
      My Name Is {name}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
