import React from 'react'
import { Link } from 'react-router-dom'
import './youcandowithskilline.css'
export default function YouCanDoWithSkilline() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-xxl-6 classRoomInfo">
                    <div className="row ">
                        <div className="col-12 classRoom"><img src={`images/classroom.png`}/></div>
                        <div className="col-12">
                            <p className="classRoomText">
                                Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
                            </p>
                        </div>
                        <div className="col-12"><Link className="learnMore" to="/">Learn more</Link></div>
                    </div>
                </div>
                <div className="col-lg-12 col-xxl-6 ">
                    <img className="classRoomPlay" src={`images/Group17.png`}/>
                </div>
            </div>
        </div>
    )
}
