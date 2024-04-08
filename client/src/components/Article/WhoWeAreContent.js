import React from 'react'
import whowearepage_banner from '../../assets/whowearepage_banner.jpg'

export default function WhoWeAreContent() {
    return (
        <div className='articleContent'>
            <div className='headlineBanner'>
                <img src={whowearepage_banner} alt="Who we are page banner" />
                <h1>We are changing the way people think about rent payment</h1>
                <br /><br />
            </div>

            <div className='textWrapper'>
                <br />
                <h5>Rentwallex is a forward-thinking financial technology company dedicated to transforming the way people pay rent. We believe in making the rental process more affordable, convenient, and empowering for tenants. With a commitment to financial well-being, we strive to bridge the gap between renters and landlords, fostering a harmonious relationship across communities. </h5>
                <br /><br />
            </div>

            <div className='textWrapper'>
                <br /><br />
                <h3>Our Mission</h3>
                <br />
                <h5>Our mission is clear – we aim to provide a comprehensive solution that not only simplifies rent payments but also contributes to the overall financial health of our community members. Through innovative rent financing and collaboration with property managers, we aspire to make renting a positive and rewarding experience.</h5>
                <br /><br />
            </div>

            <div className='textWrapper'>
                <br /><br />

                <h3>Why Rentwallex?</h3><br />
                <h5>
                <strong>Community of Trust: </strong>Our community is more than just a collection of individuals; it's a collective force driving positive change.
                <br /><br />
                <strong>Empowerment:</strong> We believe in empowering our users to take control of their financial journey, providing tools (such as split rent payment and credit profile growth) that enhance financial well-being.
                <br /><br />
                <strong>Simplicity:</strong> Our user-friendly platform makes rent payments a breeze, with just a few clicks to set up and manage your payment plans.
                <br /><br />
                <strong>Innovation:</strong> At Rentwallex, we're committed to staying at the forefront of financial technology, bringing you cutting-edge solutions for a modern and stress-free renting experience.
                </h5>
                <br /><br />
            </div>

            <div className='textWrapper'>
                <br /><br />

                <h3>It’s time for renting payment to change.</h3><br />
                <h5>Embark on a journey where renting is not just a transaction but a positive and empowering part of your financial story. Welcome to a new era in renting – welcome to Rentwallex!</h5>

                <br /><br />
            </div><br /><br />
        </div>
    )
}
