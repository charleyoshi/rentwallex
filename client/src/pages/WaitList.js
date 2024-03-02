import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button';


const resetForm = {
    propertyAddress: "",
    propertyManagerName: "",
    rentalCost: "",
    wagePaymentFrequency: "",
    email: "",
    employmentStatus: ""
}

export default function WaitList() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState(resetForm);

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [key]: value });
        console.log(formData)
    };


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
                    <form>
                        <h2>1 - Address</h2>

                        <div className="field">
                            <label>Property address</label>
                            <input
                                name="propertyAddress"
                                type="text"
                                value={formData.propertyAddress}
                                onChange={handleChange} required />
                        </div>
                        <br />
                        <div className="field half">
                            <label>Property manager name</label>
                            <input
                                name="propertyManagerName"
                                type="text"
                                value={formData.propertyManagerName}
                                onChange={handleChange} required />
                        </div>
                        <br /><br />
                        <h2>2 - Lease</h2>
                        <div className="field">
                            <label>Rental cost</label>
                            <input
                                name="rentalCost"
                                type="text"
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
                                type="text"
                                value={formData.email}
                                onChange={handleChange} required />
                        </div>
                        <br />
                        <div className="field">
                            <label>Employment Status</label><br /><br />
                            <select onChange={handleChange}>
                                <option name="fulltimeemployee"> Full-time employee</option>
                                <option name="partimeemployee">Part-time employee</option>
                                <option name="independentcontractor">Independent contractor</option>
                                <option name="retired">Retired</option>
                                <option name="unemployed">Unemployed</option>
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
