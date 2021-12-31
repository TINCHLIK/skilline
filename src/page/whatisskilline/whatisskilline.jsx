import React from 'react'
import './whatisskilline.css'
export default function WhatIsSkilline() {
    return (
        <div className="whatisskilline">
            <div className="row d-flex justify-content-center">
                <div className="col-12 text-center">
                    <img src={`images/WhatIsSkilline.png`}/>
                </div>
                <div className="col-12">
                    <p className="text-center whatisskillineTitle ">
                        Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    </p>
                </div>
                <div className="col-12">
                    <div className="row lessonTime">
                        <div className="col-sm-12 col-md-6 text-center">
                            <img className="lessonImg" src={`images/Group-22.png`}/>
                            <div className="row lesson1">
                                    <div className="col-12">
                                        <h1 className="lessonTitle">FOR INSTRUCTORS</h1>
                                    </div>
                                    <div className="col-12">
                                        <button className="lessonBtn1">Start a class today</button>
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 text-center"><img className="lessonImg" src={`images/Group-23.png`}/>
                            <div className="row lesson2">
                                <div className="col-12">
                                    <h1 className="lessonTitle">FOR STUDENTS</h1>
                                </div>
                                <div className="col-12">
                                <button className="lessonBtn2">Enter access code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
