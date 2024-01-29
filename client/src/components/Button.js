import React from 'react'

// props for Button
// - text : the text inside the button
// - icon (optional) : the icon next to the text, taken from google fonts
// - theme (optional) : 
//        accepting values: [secondary, ] 
//        if equals `secondary` , background would be hollow (Like`Find a rent` button in rentalregistry.ca). 
//        if false / not specified, would become `default` (Like `Add my rent` button in rentalregistry.ca)
export default function Button(props) {

    return (

        <button className={`button ${props.theme ?? 'default'}`}>
            {props.icon &&
                <span className="icon material-symbols-rounded">{props.icon}</span>}
            <span className='text'>{props.text}</span>
        </button>
    )
}
