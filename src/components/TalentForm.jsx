import "./TalentForm.css";
import React, { useState } from "react";

const TalentForm = () => { /* variable but is a function */
    const [formData, setFormData] = useState({ /* form data = variable, ang laman is name, age, email and talent (parang object)while yung setformdata (function) ang ginagamit niya is useState na def function ng react. useState = pag may nababago, binabago niya automatically */
        name:"",
        age:"",
        email:"",
        talent:"",
    });

    {/* kinukuha niya yung form data chuchu sa kanina */}

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData, /* copy the existing form data */
            [name]:value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (!formData.talent){
            alert("Please select talent before submitting!");
            return;
        }

        console.log("Form Data Submitted: ", formData);

        setFormData({
            name: "",
            age: "",
            email: "",
            talent: "", 
        });
    };

    return(
        <div className="form-container">
            <div className="form-card">
                <h1>Talent Form for PUPBC</h1>
                <p>Fill out the details below if you are interested</p>
            <form onSubmit = {handleSubmit}>

                {/* Name Input Field */}

                <div className="form-field">

                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />

                </div>

                {/* Age Input Field */}

                <div className="form-field">
                    <label htmlFor="age">Age</label>
                    <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    />
                </div>

                {/* Email Input Field */}

                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                {/* Talent Input Field */}

                <div className="form-field">
                    <label htmlFor="talent">Talent</label>

                    <select
                    id="talent"
                    name="talent"
                    value={formData.talent}
                    onChange={handleChange}
                    required
                    >
                        <option value ="">
                            Select your talent
                        </option>
                        <option value="Singing">
                            Singing
                        </option>
                        <option value="Poetry">
                            Poetry
                        </option>
                        <option value="Dancing">
                            Dancing
                        </option>
                    </select>
                </div>

                {/* Submit Button */}

                <button type="submit" className="Submit-Button">Submit</button>

            </form>

            </div>

        </div>
    );
};

export default TalentForm;