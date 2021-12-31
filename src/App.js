import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './page/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './responsive/mobile.css'
import './App.css';
import Company from "./page/company/company";
import Layout from './page/layout/layout'
import AllInOne from "./page/allinone/allInOne";
import WhatIsSkilline from "./page/whatisskilline/whatisskilline";
import YouCanDoWithSkilline from "./page/youcandowithskilline/youcandowithskilline";
import OurFeatures from "./page/ourfeatures/ourfeatures";
import Integrations from "./page/integrations/integrations";
import Testimonials from "./page/testimonials/testimonials";
import News from "./page/news/news";
import Footer from "./page/footer/footer";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Layout> */}
            <Routes>
              <Route exact path="/" element={<Layout/>}/>
              <Route exact path="/home" element={<Home/>}/>
              <Route exact path="/company" element={<Company/>}/>
              <Route exact path="/allinone" element={<AllInOne/>}/>
              <Route exact path="/whatisskilline" element={<WhatIsSkilline/>}/>
              <Route exact path="/youcandowithskilline" element={<YouCanDoWithSkilline/>}/>
              <Route exact path="/ourfeatures" element={<OurFeatures/>}/>
              <Route exact path="/integrations" element={<Integrations/>}/>
              <Route exact path="/testimonials" element={<Testimonials/>}/>
              <Route exact path="/news" element={<News/>}/>
              <Route exact path="/footer" element={<Footer/>}/>
            </Routes>
        
        {/* </Layout>  */}
      </Router>
    </div>
  );
}

export default App;
