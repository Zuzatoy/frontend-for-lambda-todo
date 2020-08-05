import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import './CandidateForm.css';




const useForm = (callback) =>  {
    const [inputs, setInputs] = useState({fullname:"", email: "", experience: "" });
    console.log(6666, inputs)
    let history = useHistory();

    const handleClick = () => {   
        fetch('https://0x5wgwk3t8.execute-api.ap-southeast-2.amazonaws.com/dev/candidates', {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }})
          .then(response => response.json())
          .then(inputs => {
            setInputs({ inputs }, () => {
                history.push("/list");
            });
            console.log("RESULT", inputs)
          })
          .catch(error => {
            console.log('error because', error);
          })
    }


    
    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault();
        } 
        handleClick(inputs);
    };

    const handleInputChange = (event) => { 
        setInputs({...inputs, [event.target.name]: event.target.value})}

    return {
        handleInputChange,
        handleSubmit,
        inputs
    }
}


//replace this with api call useEffect
// const newCandidate = (inputs) => {
//     alert(`Candidate Created!
//            Name: ${inputs.fullname} ${inputs.email}
//            Some expirience: ${inputs.experience}`);
//   }

export default function CandidateForm () {

    const { inputs,handleInputChange,handleSubmit } = useForm();

    return (
        <div>
        <p>
            Yo Candidate!!! Reveal yourself 
        </p>
        <form className="lisa-form" onSubmit={handleSubmit}>
            <div>
                <label className="wrapper" htmlFor="fullname">Full name</label>
                <input  type="text" name="fullname" id="fullname" value={inputs.fullname} onChange={handleInputChange} required />
            </div>
            <div >
                <label htmlFor="email">Email</label>
                <input  type="email" name="email" id="email" value={inputs.email} onChange={handleInputChange} required />
            </div>
            <div >
                <label htmlFor="experience">Years of experience</label>
                <input  type="number" name="experience" id="experience" value={inputs.experience} onChange={handleInputChange} required />
            </div>
            <div>
                <button className="button button5" type="submit">
                    Submit
                </button>
            </div>
        </form>
        </div>
    )
}