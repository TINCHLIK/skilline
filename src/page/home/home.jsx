import React from 'react'
import {Link} from 'react-router-dom';
import './home.css'
export default function Home() {
    return (
        <div className="myHeader">
            {/* NAVBAR BOSHLANDI */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light rang">
            <div className="container-fluid customHeader">
                <a className="navbar-brand" href="/"><img src={`images/logo.png`} alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item headerLink">
                            <a className="nav-link active myHeaderLink" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item headerLink">
                            <a className="nav-link myHeaderLink" href="careers">Careers</a>
                        </li>
                        <li className="nav-item headerLink">
                            <a className="nav-link myHeaderLink" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item headerLink">
                            <a className="nav-link myHeaderLink" href="/about">About Us</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success headerLogin" type="submit">Login</button>
                        <button className="btn btn-outline-success headerSignUp" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </nav>
            {/* NAVBAR TUGADI */}


            {/* HEADER BOSHLANDI */}
        <div className="row ">
            <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center headerLeftContent">
                <div className="col-12">
                    <img className="headerLeftContentWork" src={`images/StudyingOnline.png`}/>
                </div>
                <div className="col-12">
                    <p>Skilline is an interesting platform that will teach you in more an interactive way</p>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-4">
                            <button className="headerLeftContentBtn">Join for free</button>
                        </div>
                        <div className="col-4">
                            <img className="headerLeftContentPlay" src={`images/play.png`}/>
                        </div>
                        <div className="col-4">
                            <Link   to="https://www.figma.com/file/nlo1cl3ov9JZTtUtFI0w9U/Online-Learning-Landing-Page-(Community)?node-id=1%3A3" 
                                    className="headerLeftContentPTag">
                                Watch how it works
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 ms-auto headerRigtContent">
                <img className="headerRigtContentPicture" src={`images/headerPic.png`}/>
            </div>
        </div>

        </div>
            // {/* HEADER TUGADI */}
        )
}
