import React from 'react'
import './allInOne.css'
export default function AllInOne() {
    return (
        <div className='allInOne'>
            <div className="row d-flex justify-content-center"> 
                <div className="col-12 text-center">
                    <img src={`images/All-In-One_Cloud_Software.png`}/>
                </div>
                <div className="col-12">
                    <p className="text-center cloudTitle">
                        Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
                    </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 myCard">
                    <div className="col-12"><img src={`images/card1title.png`}/></div>
                    <div className="col-12"><p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p></div>
                    <img className="cardIcon1" src={`images/Group-79.png`}/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 myCard">
                    <div className="col-12"><img src={`images/card2title.png`}/></div>
                    <div className="col-12"><p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p></div>
                    <img className="cardIcon2" src={`images/Group-80.png`}/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 myCard">
                    <div className="col-12"><img src={`images/card3title.png`}/></div>
                    <div className="col-12"><p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p></div>
                    <img className="cardIcon3" src={`images/Group-81.png`}/>
                </div>

            </div>            
        </div>
    )
}
