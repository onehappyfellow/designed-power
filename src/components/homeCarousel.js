import * as React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { StaticImage } from 'gatsby-plugin-image'


const minimal = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
}


const HomeCarousel = () => {
    return (
      <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={minimal}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={false}
          customTransition="opacity 1s ease-in-out"
          transitionDuration={1000}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
      >
        <StaticImage aspectRatio={3/1} transformOptions={{cropFocus: "northwest"}} placeholder="blurred" layout="fullWidth" alt="Utility scale wind and solar farm" src="../images/stock/renewables.jpg" />        
        <StaticImage aspectRatio={3/1} transformOptions={{cropFocus: "northwest"}} placeholder="blurred" layout="fullWidth" alt="Factory floor with industrial equipment" src="../images/stock/HomeSlider3-850-2.jpg" />        
        <StaticImage aspectRatio={3/1} transformOptions={{cropFocus: "northwest"}} placeholder="blurred" layout="fullWidth" alt="Engineers discussing electrical wiring" src="../images/stock/HomeSlider4-850.jpg" />        
        <StaticImage aspectRatio={3/1} transformOptions={{cropFocus: "center"}} placeholder="blurred" layout="fullWidth" alt="Row of boxes with power relays and controls" src="../images/stock/HomeSlider2-850.jpg" />        
        <StaticImage aspectRatio={3/1} transformOptions={{cropFocus: "northwest"}} placeholder="blurred" layout="fullWidth" alt="Technician on a lift servicing machinery" src="../images/stock/HomeSlider7-850.jpg" />
      </Carousel>
    )
}

export default HomeCarousel
  