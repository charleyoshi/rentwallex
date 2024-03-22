import React from 'react'

export default function RentItem(props) {
    const streetNumber = props.item.streetNumber
    const route = props.item.route
    const city = props.item.city
    const province = props.item.province
    const rentalCost = props.item.rentalCost

    return (
        <div className='rentItem'>

            <div className='row one'>{streetNumber} {route}, {city}, {province}</div>
            <div className='row two'>

                {/* <span className="icon material-symbols-rounded">bed</span>
                <span className='text'>2 bedrooms</span>
                &nbsp;
                <span className="icon material-symbols-rounded">payments</span>
                <span className='text'>bi-weekly</span> */}


            </div>
            <div className='row three'>
                <div className='cost'>
                    <span className='money'>{rentalCost} $ </span>
                    <span className='perMonth'>&nbsp;/ Month</span>
                </div>
                <div className='btn'>Details</div>
            </div>
        </div>
    )
}
