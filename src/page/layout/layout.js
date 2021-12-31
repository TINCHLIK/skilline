import React from 'react'
import Company from '../../page/company/company.jsx'
import Home from '../../page/home/home.jsx'
import AllInOne from '../allinone/allInOne.jsx';
import Footer from '../footer/footer.js';
import Integrations from '../integrations/integrations.js';
import News from '../news/news.jsx';
import OurFeatures from '../ourfeatures/ourfeatures.jsx';
import Testimonials from '../testimonials/testimonials.js';
import WhatIsSkilline from '../whatisskilline/whatisskilline.jsx';
import YouCanDoWithSkilline from '../youcandowithskilline/youcandowithskilline.jsx';

// import './Layout.css'

const Layout = (props) => {
    return(
        <React.Fragment>
            <Home/>
            <Company/>
            <AllInOne/>
            <WhatIsSkilline/>
            <YouCanDoWithSkilline/>
            <OurFeatures/>
            <Integrations/>
            <Testimonials/>
            <News/>
            <Footer/>
            <main className="main-content">
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default Layout;