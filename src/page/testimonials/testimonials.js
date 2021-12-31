import React from 'react'
import { Link } from 'react-router-dom'
import "./testimonials.css"
export default function Testimonials() {
    return (
        <div className="container">
            <div className="row T_Container">
                <div className="col-12 col-xxl-6">
                    <div className="row T_L_Container">
                        <div className="col-12"><img src={`images/Line-5.png`}/><h5 className="T_L_Col1_Text">TESTIMONIAL</h5></div>
                        <div className="col-12"><h1 className="T_L_Col2_Text">What They Say?</h1></div>
                        <div className="col-12"><p className="T_L_Col3_Text">Skilline has got more than 100k positive ratings from our users around the world</p></div>
                        <div className="col-12"><p className="T_L_Col4_Text">Some of the students and teachers were greatly helped by the Skilline.</p></div>
                        <div className="col-12"><p className="T_L_Col5_Text">Are you too? Please give your assessment</p></div>
                        <div className="col-12">
                            
                            <button className="T_L_Col6_Btn">Write your assessment</button>
                            <img className="T_L_Col6_Btn_Circle" src={`images/Group-32.png`}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xxl-6">
                    <div className="T_R_Container" >
                        <div className="T_R_Img_Container">
                            <img className='T_R_Img_1' src={`images/T_L_R_IMG.png`}/>
                            <img className='T_R_Img_2' src={`images/Group-51.png`}/>
                            <div className='T_R_Text_Container'>
                                <p className="T_R_TC_Text">"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."</p>
                                <Link to="/" className="T_R_TC_Text_Link">Gloria Rose</Link>
                                <img src={`images/Group-29.png`} className="T_R_TC_Star"></img>
                                <p className="T_R_TC_Reviews">12 reviews at Yelp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
