import React from 'react'
import { useState } from 'react';

interface Props {
  name:string;
  age:number;
  isAlive:boolean;
}

const person = (props:Props) => {
    const [personBio, setPersonBio] = useState<string | null>(null);  
    const [bioInput, setBioInput] = useState<string>(""); // State to hold the input value
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setBioInput(event.target.value);
    }
    const submitBio = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setPersonBio(bioInput);
        setBioInput(""); // Clear the input field after submission
    }
  return (  
    <>
      <h1>Hello i am {props.name}, age {props.age}, isAlive: {props.isAlive.toString()}</h1>
      <p>
        {""}
        {props.name} bio:{!personBio ? "No bio available" : personBio}
      </p>
      <input type="text" onChange={handleChange} value={bioInput} className='border-2 rounded-md'/>
      <button type="submit" onClick={submitBio} className='border-2 rounded-md ml-2'>Submit Bio</button>
    </> 
  )
}

export default person
