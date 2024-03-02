import React from 'react'

export default function RentItem() {
    return (
        <div className='rentItem'>

            <div className='row one'>2004-70 Gloucester Street, Ottawa</div>
            <div className='row two'>

                {/* <span className="icon material-symbols-rounded">bed</span>
                <span className='text'>2 bedrooms</span>
                &nbsp;
                <span className="icon material-symbols-rounded">payments</span>
                <span className='text'>bi-weekly</span> */}


            </div>
            <div className='row three'>
                <div className='cost'>
                    <span className='money'>2100.00 $ </span>
                    <span className='perMonth'>&nbsp;/ Month</span>
                </div>
                <div className='btn'>Details</div>
            </div>
        </div>
    )
}
