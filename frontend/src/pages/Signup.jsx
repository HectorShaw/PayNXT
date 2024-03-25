import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from 'axios';

import { useState } from "react";


export const Signup = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");

  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />

        <InputBox onChange={
          (e) => {
            setFirstName(e.target.value);
          }
        } placeholder="Olajide" label={"First Name"} />

        <InputBox onChange={
          (e) => {
            setLastName(e.target.value);
          }
        } placeholder="Olatunji" label={"Last Name"} />

        <InputBox onChange={
          (e) => {
            setUsername(e.target.value);
          }
        } placeholder="something@gmail.com" label={"Email"} />

        <InputBox onChange={
          (e) => {
            setPassword(e.target.value);
          }
        } placeholder="********" label={"Password"} />
        
        {error && <p className="text-red-500">{error}</p>}
        
        <div className="pt-4">
          <Button onClick={async () => {
          try {
            await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              password,
              firstName,
              lastName
            })
            localStorage.setItem("jwt-token",response.data.token)
          } catch (error) {
            if (error.response) {
              setError(error.response.data.message);
            } else {
              setError("Error signing up. Please try again later.");
            }
          }
            
          }} label={"Sign up"} />
        </div>
        
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}