import React from 'react'
import { Link } from 'react-router-dom'
import "./news.css"
export default function News() {
    return (
        <div className="container">
            <div className="row newsContainer d-flex">
                <div className="col-12"><h1 className="NewsTitle">Lastest News and Resources</h1></div>
                <div className="col-12"><p className="NewsTitleCol2">See the developments that have occurred to Skillines in the world</p></div>
                <div className="col-12 col-xxl-6 N_L_Container">
                    <div className="row N_L_Row_Container">
                        <div className="col-12"><img className="N_L_Col_1" src={`images/Group-40.png`}/></div>
                        <div className="col-12"><button className="N_L_Col_2">NEWS</button></div>
                        <div className="col-12"><p className="N_L_Col_3">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p></div>
                        <div className="col-12"><p className="N_L_Col_4">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p></div>
                        <div className="col-12"><Link className="N_L_Col_5" to="/">Read more</Link></div>
                    </div>
                </div>
                <div className="col-12 col-xxl-6 N_R_Container">
                    <div className="row N_R_Row_Container">
                        <div className="col-5"><img className="N_R_Img1" src={`images/Rectangle-33.png`}/></div>
                        <div className="col-7">
                            <div className="row">
                                <div className="col-12"><p className="N_R_Text_Col1">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</p></div>
                                <div className="col-12"><p className="N_R_Text_Col2">Class Technologies Inc., the company that created Class,...</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5"><img className="N_R_Img2" src={`images/Group-42.png`}/></div>
                        <div className="col-7">
                            <div className="row">
                                <div className="col-12"><p className="N_R_Text_Col3">Zoom’s earliest investors are betting millions on a better Zoom for schools</p></div>
                                <div className="col-12"><p className="N_R_Text_Col4">Zoom was never created to be a consumer product. Nonetheless, the...</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5"><img className="N_R_Img3" src={`images/Group-43.png`}/></div>
                        <div className="col-7">
                            <div className="row">
                                <div className="col-12"><p className="N_R_Text_Col5">Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</p></div>
                                <div className="col-12"><p className="N_R_Text_Col6">This year, investors have reaped big financial returns from betting on Zoom...</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
