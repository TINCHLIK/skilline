import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
export default class Gallery extends React.Component{

    onSlideChange(e){
        console.log("Item's position during a change:",e.item);
        console.log("Slide's position during a change:",e.slide);
    }
    onSlideChanged(e){
        console.log("Item's position after a change:",e.item);
        console.log("Slide's position after a change:",e.slide);
    }

    render(){
        const responsive={
            0:{
                items:1
            },
            600:{
                items:3
            },
            1024:{
                items:6
            }
        };

        return (
            <AliceCarousel
              infinite={true}
              duration={250}
              autoPlay={true}
              startIndex = {1}
              fadeOutAnimation={true}
              mouseDragEnabled={true}
              playButtonEnabled={true}
              responsive={responsive}
              autoPlayInterval={2000}
              autoPlayDirection="rtl"
              autoPlayActionDisabled={true}
              onSlideChange={this.onSlideChange}
              onSlideChanged={this.onSlideChanged}
            >
              <div className="yours-custom-class">
                  <img src={`images/google.png`}/>
              </div>
              <div className="yours-custom-class">
                  <img src={`images/netflix.png`}/>
              </div>
              <div className="yours-custom-class">
                  <img src={`images/airbnb.png`}/>
              </div>
              <div className="yours-custom-class">
                  <img src={`images/amazon.png`}/>
              </div>
              <div className="yours-custom-class">
                  <img src={`images/facebook.png`}/>
              </div>
              <div className="yours-custom-class">
                  <img src={`images/grab-logo.png`}/>
              </div>
            </AliceCarousel>
          );

    }
}
