import React, { useState, useEffect } from "react";
import CandidatesList from "./CandidatesList";
import './CandidateForm.css';


const useForm = (callback) =>  {
    const [inputs, setInputs] = useState({fullname:"", email: "", experience: "" });

    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault();
        } callback(inputs);
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
const newCandidate = (inputs) => {
    alert(`Candidate Created!
           Name: ${inputs.fullname} ${inputs.email}
           Some expirience: ${inputs.experience}`);
  }

export default function CandidateForm () {
    const { inputs,handleInputChange,handleSubmit } = useForm(newCandidate);
    return (
        <div>
        <form className="lisa-form" onSubmit={handleSubmit}>
            <div>
                <label className="al" htmlFor="fullname">Full name</label>
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
                <button className="button button5" type="submit">Submit</button>
            </div>
        </form>
            <CandidatesList />
        </div>
    )
}