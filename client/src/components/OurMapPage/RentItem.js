import React from 'react'

export default function RentItem(props) {
    const streetNumber = props.item.streetNumber
    const route = props.item.route
    const city = props.item.city
    const province = props.item.province
    const rentalCost = props.item.rentalCost
    const wagePaymentFrequency = props.item.wagePaymentFrequency
    const propertyManagerName = props.item.propertyManagerName

    const isDetail = props.isDetail

    return (
        <div className={`rentItem ${props.focus ? ".hover" : " "}`} onClick={() => props.show(props.item, props.id)} >

            <div className='row one'>{streetNumber} {route}, {city}, {province}</div>

            <br />
            {isDetail &&
                <>
                    <div className='row two'>
                        <span className="icon material-symbols-rounded">domain</span>
                        <span className='text'>{propertyManagerName}</span>
                    </div>
                    <div className='row two'>
                        <span className="icon material-symbols-rounded">payments</span>
                        <span className='text'>{wagePaymentFrequency}</span>
                    </div>
                </>
            }

            <div className='row three'>
                <div className='cost'>
                    <span className='money'>{rentalCost} $ </span>
                    <span className='perMonth'>&nbsp;/ Month</span>
                </div>
                {!isDetail &&
                    <div className='btn'>Details</div>
                }
            </div>
        </div>
    )
}
