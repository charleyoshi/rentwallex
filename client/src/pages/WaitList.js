import React from 'react'
import Navbar from '../components/Navbar'

export default function WaitList() {
    return (
        <div className='waitlist'>
            <Navbar />
            <div className='pageWrapper'>
                <div className='left'>
                    <h3>Join Rentwallex community to revolutionize e rent payment</h3>
                    <p>Lorem ipsum dolor sit
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
                        laborum."</p>

                </div>
                <div className='right'>
                    <h3>The wait list from for renters goes here</h3>
                    <form>
                        <label> Field 1&nbsp;
                            <input type="text" />
                        </label> <br />
                        <label>Field 2&nbsp;
                            <input type="text" />
                        </label> <br />
                        <label>Field 3&nbsp;
                            <input type="text" />
                        </label> <br />
                        <label>Field 4&nbsp;
                            <input type="text" />
                        </label> <br />
                        <label> Field 5&nbsp;
                            <input type="text" />
                        </label> <br />
                        <label>Field 6&nbsp;
                            <input type="text" />
                        </label> <br />
                        <label>Field 7&nbsp;
                            <input type="text" />
                        </label> <br />
                        <label>Field 8&nbsp;
                            <input type="text" />
                        </label> <br />
                        Submit
                    </form>

                </div>
            </div>

        </div>
    )
}
