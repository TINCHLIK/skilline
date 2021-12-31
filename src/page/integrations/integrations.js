import React from 'react'
import './integrations.css'
export default function Integrations() {
    return (
        <div className="container integrations">
            <div className="row">
                <div className="col-12 col-xxl-6 ">
                    <div className="row IL_Content">
                        <div className="col-6"><img className="OneDrive" src={`images/OneDrive.png`}/></div>
                        <div className="col-6"><img className="BoxDrive" src={`images/BoxDrive.png`}/></div>
                        <div className="col-6"><img className="GoogleDrive" src={`images/GoogleDrive.png`}/></div>
                        <div className="col-6"><img className="TBox" src={`images/T.png`}/></div>
                    </div>
                </div>
                <div className="col-12 col-xxl-6">
                <div className="row IR_Content">
                        <div className="col-12"><img src={`images/line-5.png`}/><p className="IR_integration">INTEGRATIONS</p></div>
                        <div className="col-12"><img className="IR_Text_Img" src={`images/200+.png`}/></div>
                        <div className="col-12"><p className="IR_Text">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p></div>
                        <div className="col-12"><button className="IR_Btn">See All Integrations</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
