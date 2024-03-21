import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button';

import { initAutocomplete } from '../helpers/autocompleteAddress.js';



const resetForm = {
    propertyAddress: "",
    propertyManagerName: "",
    rentalCost: "",
    wagePaymentFrequency: "",
    email: "",
    employmentStatus: "fulltimeemployee"
}

export default function WaitList() {
    const addressRef = useRef(null);
    const addressNextRef = useRef(null);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        initAutocomplete(addressRef.current, addressNextRef.current);
    }, []);

    const [formData, setFormData] = useState(resetForm);


    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [key]: value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ ...formData, 'propertyAddress': addressRef.current.value });

        console.log(formData)
        // console.log(addressRef.current.value)
        alert("Submitted")
        // if (handleValidation()) {
        //     alert("Form submitted");
        // } else {
        //     alert("Form has errors.")
        // }
    }

    return (
        <div className='waitlist'>
            <Navbar />
            <div className='pageWrapper'>
                <div className='left'>
                    <h3>Join Rentwallex community to revolutionize e rent payment</h3>
                    <br /><br />
                    <h4>Lorem ipsum dolor sit
                        amet, consectetur
                        adipiscing elit, sed do
                        eiusmod tempor incididunt
                        ut labore et dolore magna
                        aliqua. Ut enim ad minim
                        veniam, quis nostrud
                        exercitation ullamco
                        laboris nisi ut aliquip ex ea
                        commodo consequat. Duis
                        aute irure dolor in
                        reprehenderit in voluptate
                        velit esse cillum dolore eu
                        fugiat nulla pariatur.
                        Excepteur sint occaecat
                        cupidatat non proident,
                        sunt in culpa qui officia
                        deserunt mollit anim id est
                        laborum."</h4>

                </div>
                <div className='right'>
                    <h1>Join the wait list</h1>
                    <br /><br />
                    <form onSubmit={e => handleSubmit(e)}>
                        <h2>1 - Address</h2>

                        <div className="field">
                            <label>Property address (updating)</label>
                            <input
                                ref={addressRef}
                                name="propertyAddress"
                                id="propertyAddress"
                                required
                                autoComplete="off"
                                // onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div className="field half">
                            <label>Property manager name</label>
                            <input
                                ref={addressNextRef}
                                name="propertyManagerName"
                                type="text"
                                value={formData.propertyManagerName}
                                required onChange={handleChange}/>
                        </div>
                        <br /><br />
                        <h2>2 - Lease</h2>
                        <div className="field">
                            <label>Rental cost</label>
                            <input
                                name="rentalCost"
                                type="number"
                                value={formData.rentalCost}
                                onChange={handleChange} required />
                        </div>
                        <br />
                        <div className="field">
                            <label>Wage payment frequency</label>
                            <input
                                name="wagePaymentFrequency"
                                type="text"
                                value={formData.wagePaymentFrequency}
                                onChange={handleChange} required />
                        </div>
                        <br /><br />
                        <h2>3 - Identification</h2>
                        <div className="field half">
                            <label>Email</label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange} required />
                        </div>
                        <br />
                        <div className="field">
                            <label>Employment Status</label><br /><br />
                            <select value={formData.employmentStatus} onChange={(event) => setFormData({ ...formData, employmentStatus: event.target.value })}>
                                <option value="fulltimeemployee">Full-time employee</option>
                                <option value="partimeemployee">Part-time employee</option>
                                <option value='independentcontractor'>Independent contractor</option>
                                <option value="retired">Retired</option>
                                <option value="unemployed">Unemployed</option>
                            </select>
                        </div>


                        <br /><br /><br />



                       
                        <Button text="Submit" />
                    </form>

                </div>
            </div>

        </div>
    )
}
