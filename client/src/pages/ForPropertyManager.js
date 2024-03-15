import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import dummy_picture from '../assets/picture_placeholder.png'



const resetForm = {
    firstName: "",
    lastName: "",
    businessName: "",
    locationCity: "",
    locationProvice: "",
    email: "",
    phoneNumber: "",
    totalUnitsManagedInPortfolio: "",
    propertyManagementSoftware: ""
}
export default function ForPropertyManager() {
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
        <div className='forPropertyManager'>
            <Navbar forPage="home" />
            <div className="container">
                <section className="one">
                    <div className="left">
                        <h1 className="headline">
                            Rental properties
                        </h1>
                        <h4 className="headline-2">
                            Rentwallex is proud to partner with leading property managers and landlords to
                            offer our innovative financing solutions to tenants nationwide.
                            <br /><br />
                            Join our growing network of satisfied partners today.
                        </h4>
                        <Link to="todo">
                            <Button text="Request a demo" />
                        </Link>

                    </div>
                    <br className='linebreak' />
                    <div className="right">
                        <img
                            referrerPolicy="no-referrer"
                            src={dummy_picture}
                            alt="dummy_picture"
                            width="100%"
                        />
                    </div>
                </section>
            </div>


            <div className='container'>
                <section className="two">
                    <div className="howItWorks">
                        <h1>How Rentwallex Works for Property Managers and Landlords</h1>
                        {/* <h2>We partner with property managers and registered landlords to make it easy to split your rent into manageable payments.</h2> */}
                        <div className="steps">
                            <div className="step">
                                {/* <p>Step 1</p> */}
                                <img src={dummy_picture} alt="dummy_picture" />
                                <h3>Sign Up</h3>
                                <h4>Simply sign up, provide some basic information about your property. Seamlessly integrate Rentwallex into your existing property management systems with minimal setup required.</h4>
                            </div>
                            <br className='linebreak' />
                            <br className='linebreak' />
                            <div className="step">
                                {/* <p>Step 2</p> */}
                                <img src={dummy_picture} alt="dummy_picture" />
                                <h3>Invite Tenants</h3>
                                <h4>Once your account is set up, invite your tenants to join Rentwallex. They can sign up and start making payments in just a few simple steps.</h4>
                            </div>
                            <br className='linebreak' />
                            <br className='linebreak' />
                            <div className="step">
                                {/* <p>Step 3</p> */}
                                <img src={dummy_picture} alt="dummy_picture" />
                                <h3>Automated Rent Collection</h3>
                                <h4>Sit back and relax as Rentwallex automates the rent collection process. Payments are deposited directly into your account, saving you time and effort.</h4>
                            </div>
                            <br className='linebreak' />
                            <br className='linebreak' />
                            <div className="step">
                                {/* <p>Step 4</p> */}
                                <img src={dummy_picture} alt="dummy_picture" />
                                <h3>Monitor Payments</h3>
                                <h4>Keep track of rent payments and account activity through the Rentwallex dashboard. Access real-time data to stay informed and in control.</h4>
                            </div>
                            <br className='linebreak' />
                            <br className='linebreak' />
                            <div className="step">
                                {/* <p>Step 5</p> */}
                                <img src={dummy_picture} alt="dummy_picture" />
                                <h3>Dedicated Support</h3>
                                <h4>Enjoy personalized support from the Rentwallex team, ensuring any questions or concerns are addressed promptly and effectively.</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='container'>
                <section className='three'>
                    <h1>Sign up</h1>
                    <br /><br />
                    <form>
                        <h2>1 - Identification</h2>

                        <div className="field">
                            <label>First name</label>
                            <input
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange} required />
                        </div>
                        <br />
                        <div className="field">
                            <label>Last name</label>
                            <input
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange} required />
                        </div>
                        <br /><br />
                        <h2>2 - Business information</h2>
                        <div className="field">
                            <label>Business name</label>
                            <input
                                name="businessName"
                                type="text"
                                value={formData.businessName}
                                onChange={handleChange} required />
                        </div>
                        <br />
                        <div className='sameRow'>
                            <div className="field half">
                                <label>City</label>
                                <input
                                    name="locationCity"
                                    type="text"
                                    value={formData.locationCity}
                                    onChange={handleChange} required />
                            </div>

                            <div className="field half">
                                <label>Province</label>
                                <input
                                    name="locationProvice"
                                    type="text"
                                    value={formData.locationProvice}
                                    onChange={handleChange} required />
                            </div>
                        </div>
                        <br /><br />
                        <h2>3 - Contact</h2>

                        <div className="field half">
                            <label>Email</label>
                            <input
                                name="email"
                                type="text"
                                value={formData.email}
                                onChange={handleChange} required />
                        </div>
                        <br />
                        <div className="field half">
                            <label>Phone Number</label>
                            <input
                                name="phoneNumber"
                                type="text"
                                value={formData.phoneNumber}
                                onChange={handleChange} required />
                        </div>
                        <br /><br />
                        <h2>4 - Business scale</h2>

                        <div className="field half">
                            <label>Total units managed in portfolio</label>
                            <input
                                name="totalUnitsManagedInPortfolio"
                                type="text"
                                value={formData.totalUnitsManagedInPortfolio}
                                onChange={handleChange} required />
                        </div>
                        <br />
                        <div className="field half">
                            <label>What property management software do you use?</label>
                            <input
                                name="propertyManagementSoftware"
                                type="text"
                                value={formData.propertyManagementSoftware}
                                onChange={handleChange} required />
                        </div>



                        <br /><br /><br />
                        <Button text="Submit" />
                    </form>

                </section>
            </div>
        </div>


    )
}
