import React from 'react'
import './Instruction.css'

const Instruction = () => {
  return (
    <section id='instruction'>
        <div className="container">
            <div className="common-heading">
                <h2>Things you need <span>to do</span></h2>
                <p>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. </p>
                <img src="Images/planes.png" alt="planes" />
            </div>
            <div className="instruction-row">
                <div className="instruction-single-card">
                    <img src="Images/instruction1.png" alt="Work" />
                    <h2>Sign Up</h2>
                    <p>Completes all the work associated with planning and processing</p>
                    <div className="curved-line"><img src="Images/line1.png" alt="" /></div>
                </div>
                <div className="instruction-single-card">
                    <img src="Images/instruction2.png" alt="Work" />
                    <h2>Worth of Money</h2>
                    <p>After successful access then book from exclusive deals & pricing</p>
                    <div className="curved-line"><img src="Images/line2.png" alt="" /></div>
                </div>
                <div className="instruction-single-card">
                    <img src="Images/instruction3.png" alt="Work" />
                    <h2>Exciting Travel</h2>
                    <p>Start and explore a wide range of exciting travel experience.</p>
                    <div className="curved-line"><img src="Images/line3.png" alt="" /></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Instruction