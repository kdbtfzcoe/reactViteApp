import "./TalentForm.css";
import React, { useState } from "react";

const TalentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        talent: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, // Copy the existing form data
            [name]: value, // Update the specific field
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.talent) {
            alert("Please select talent before submitting!");
            return;
        }

        console.log("Form Data Submitted: ", formData);

        try {
            const response = await fetch('http://localhost:5001/api/talent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    age: formData.age,
                    email: formData.email,
                    talent: formData.talent,
                }),
            });

            console.log('Response Status:', response.status); // Log the response status

            if (response.ok) {
                const data = await response.json();
                console.log('Submission successful:', data);
                // Reset the form after successful submission
                setFormData({
                    name: "",
                    age: "",
                    email: "",
                    talent: "",
                });
            } else {
                const errorData = await response.json();
                console.error('Error submitting form:', errorData);
                alert('Error submitting form: ' + errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h1>Talent Form for PUPBC</h1>
                <p>Fill out the details below if you are interested</p>
                <form onSubmit={handleSubmit}>

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
                            <option value="">
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