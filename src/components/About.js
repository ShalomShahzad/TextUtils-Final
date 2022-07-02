import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    
    return (
        <div className="container">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>About Text-Utils</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    <strong>Text-Utils is a text utility static site made using React. It allow to modify your text in various ways, Whether it is making in uppercase, lowercase, copy text, clear text or remove extra spaces.
                        Made By - Shalom Shahzad
                    </strong>

                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
