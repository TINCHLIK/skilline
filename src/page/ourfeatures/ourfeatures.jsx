import React from 'react'
import "./ourfeatures.css"
export default function OurFeatures() {
    return (
        <div className="ourFeaturesContainer***">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center"><img className="featureTopImg" src={`images/OurFeatures.png`}/></div>
                    <div className="col-12 text-center"><p className="featureTitle">This very extraordinary feature, can make learning activities more efficient</p></div>
                </div>
                <div className="row justify-content-between mt-4">
                    <div className="col-12 col-xxl-6">
                        <img className="zoom" src={`images/zoom.png`}/>
                    </div>
                    <div className="OF_FirstRight col-12 col-xxl-6 ">
                            <div className="row">
                                <div className="col-12"><img className="OF_FirstRightImg" src={`images/OFR1.png`}/></div>
                                <div className="col-12 mt-5">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="circle mb-1"><img className="circle1" src={`images/Group-72.png`}/></div>
                                        </div>
                                        <div className="col-10">
                                            <p>
                                                Teachers don’t get lost in the grid view and have a dedicated Podium space.                                            
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-4 mb-4">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="circle mb-1"><img className="circle2" src={`images/Group-73.png`}/></div>
                                        </div>
                                        <div className="col-10">
                                            <p>
                                                TA’s and presenters can be moved to the front of the class.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="circle mb-1"><img className="circle3" src={`images/users-2.png`}/></div>
                                        </div>
                                        <div className="col-10">
                                            <p>
                                                Teachers can easily see all students and class data at one time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>   
            


            <div className="row">
                <div className="col-12 col-xxl-6">
                    <div className="row text-center  h-100 d-flex flex-content-between">
                        <div className="col-12">
                            <img className="OFR2ImgText" src={`images/Tools.png`}/>
                        </div>
                        <div className="col-12">
                            <p className="OF2Rtext">
                                Class has a dynamic set of teaching tools built to be deployed and used during class.
                                Teachers can handout assignments in real-time for students to complete and submit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xxl-6">
                    <img src={`images/Group-122.png`}/>
                </div>
            </div>

            <div className="row OF3Content">
                <div className="col-12 col-xxl-6 OF3LContent"><img className="OF3LImg" src={`images/Group-92.png`}/></div>
                <div className="col-12 col-xxl-6 d-flex flex-column justify-content-center OFR3Content">
                    <img className="OFR3Img" src={`images/OF3R.png`}/>
                    <p className="OFR3Text">Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook. </p>
                </div>
            </div>


            <div className="row">
                <div className="col-12 col-xxl-6">
                    <div className="row d-flex flex-content-center">
                        <div className="col-12">
                            <img className="OF4LImgText" src={`images/Management.png`}/>
                        </div>
                        <div className="col-12 OF4LContent">
                            <p className="OF4Ltext">
                                Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="OF4RContent col-12 col-xxl-6">
                    <img className="OF4RImg" src={`images/Group-124.png`}/>
                </div>
            </div>

            <div className="row OR5Content">
                <div className="OF5LContent col-12 col-xxl-6">
                    <img className="OF5LImg" src={`images/Group-106.png`}/>
                </div>
                <div className=" col-12 col-xxl-6">
                    <div className="row OF5RContent">
                        <div className="col-12"><img className="OF5RImg" src={`images/One-on-One-Discussions.png`}/></div>
                        <div className="col-12"><p className="OFR5Text">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p></div>
                    </div>
                    
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-center">
                    <button className="OF6Btn">See more features</button>
                </div>
            </div>
            </div>
        </div>
    )
}
