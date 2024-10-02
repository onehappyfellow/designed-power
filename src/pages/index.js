import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import HomeCarousel from "../components/homeCarousel"
import { styled } from "styled-components"
import { Link } from "gatsby"


const StyledPopup = styled.div`
  position: relative;
  max-width: var(--maxContentWidth);
  margin: auto;
  top: -3.2rem;
  .popup-row {
    position: absolute;
    display: flex;
  }
  .popup-box {
    background-color: rgba(3, 3, 3, 0.8);
    padding: 1rem;
    margin: 0 1rem;
    flex: 1;
    height: 15rem;
    transition-duration: 0.6s;
    transition-timing-function: ease;
  }
  .popup-box:hover, .popup-box:focus {
    background-color: rgba(3, 3, 3, 0.9);
    transform: translateY(-11.5rem);
  }
  .popup-box h2 {
    color: #fff;
    text-transform: uppercase;
    border-bottom: 1px solid #aaa;
    margin-top: -0.2rem;
    padding-bottom: 0.5rem;
  }
  .popup-box p {
    color: #fff;
  }
  .popup-box .btn {
    background-color: var(--blue);
    color: #fff;
    text-decoration: none;
    padding: 0.4rem 1rem;
    border-radius: 0.2rem;
  }
`
const StyledContent = styled.div`
  background-color: #fff;
  position: relative;
  .headline {
    margin-top: 0;
    padding: 2rem;
    padding-top: 3rem;
    border-bottom: 1px solid #aaa;
    color: var(--blue);
    text-align: center;
    ul {
      display: inline-flex;
      flex-direction: column;
      text-align: left;
    }
  }
  .row {
    display: flex;
    margin-top: 1rem;
    .block {
      flex: 1;
      margin: 0 0.5rem;
    }
    .img {
      box-shadow: 0 5px 8px -2px #888888;
    }
  }
  .underline {
    border-bottom: 1px solid #aaa;
    padding-bottom: 1.5rem;
  }
  .contact {
    display: block;
    width: 200px;
    margin: 1rem auto;
    background: var(--blue);
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.2rem;
    box-shadow: 0 5px 8px -2px #888888;
  }
`

const IndexPage = () => {
  return (
    <Layout banner={<HomeCarousel />}>

      <StyledPopup>
        <div className="popup-row">
          <div className="popup-box">
            <h2>Manufacturers</h2>
            <p>Designed Power has product solutions from top electrical manufacturers to meet the most challenging power needs you have, regardless of what sort of facility you have.</p>
            <Link to="/manufacturers" className="btn">Read More</Link>
          </div>
          <div className="popup-box">
            <h2>Services</h2>
            <p>Designed Power offers services from both manufacturers and highly trained third-party service organizations to keep your power equipment running at its optimum.</p>
            <Link to="/services" className="btn">Read More</Link>
          </div>
          <div className="popup-box">
            <h2>About Us</h2>
            <p>Hear what our customers say: "I want you to know how sincerely appreciative we are of Designed Power for their effective and professional assistance..." </p>
            <Link to="/about" className="btn">Read More</Link>
          </div>
        </div>
      </StyledPopup>

      <StyledContent>
        <h1 className="headline">
          <div>Designed Power is an electrical sales firm specializing in electrical power equipment and services:</div>
          <ul>
            <li>Power Distribution</li>
            <li>Control & Automation</li>
            <li>Energy Efficency</li>
            <li>Resiliency</li>
            <li>Power Quality</li>
            <li>Energy Storage</li>
          </ul>
        </h1>
        <h2>DESIGNED POWER... YOUR BEST SOURCE FOR THE RIGHT SOLUTION!</h2>
        <div className="row underline">
          <p className="block">Based in the heart of the southwest, Designed Power specializes in comprehensive and creative solutions for your toughest electrical power challenges. How do you get more from your electrical investments? Whether you need an upgrade, expansion or life extension Designed Power can help.</p>
          <p className="block">With proven customer service, technical capability and sales expertise spanning well over 30 years, they offer a diverse product selection customized to your needs. Whether you’re building a new facility or just hunting down a hard-to-find replacement part, Designed Power can make the job easier and more affordable.</p>
          <p className="block">Designed Power’s exceptional blend of technical insight, proactive salesmanship and superb customer support is all focused on electrical technology solutions. Whenever you need reliable answers, a quick response or a solution to your most challenging electrical problem, Designed Power is the first call to make.</p>
        </div>
        <div className="row">
          <div className="block">
            <StaticImage className="img" layout="constrained" src="../images/stock/Home2-290.jpg" alt="electrical power equipment" />
            <h2>Electrical Power Equipment</h2>
            <ul>
              <li>Uninterruptible Power Supplies</li>
              <li>Batteries & Energy Storage</li>
              <li>Switchgear</li>
              <li>Motor Controls & Drives</li>
              <li>Custom Distribution Equipment</li>
              <li>Transformers</li>
              <li>Substations</li>
              <li>Power Factor Correction</li>
            </ul>
          </div>
          <div className="block">
            <StaticImage className="img" layout="constrained" src="../images/stock/Home-290.jpg" alt="technician looking at control panel" />
            <h2>Services</h2>
            <ul>
              <li>UPS service contracts</li>
              <li>Battery replacements & upgrades</li>
              <li>Commissioning & startup</li>
              <li>Onsite repairs, retrofits & life extension</li>
              <li>Power system studies</li>
              <li>Relay & breaker testing & calibration</li>
              <li>Turnkey projects</li>
              <li>Equipment evaluations and salvage</li>
            </ul>
          </div>
          <div className="block">
            <StaticImage className="img" layout="constrained" src="../images/stock/Home4-290.jpg" alt="wires connected" />
            <h2>Some of Our Partners</h2>
            <ul>
              <li>ABB</li>
              <li>Benshaw</li>
              <li>Eaton</li>
              <li>Dis-Tran</li>
              <li>ESS Metron</li>
              <li>IEM</li>
              <li>Mitsubishi</li>
              <li>Virginia Transformers</li>
            </ul>
          </div>
        </div>
        <Link to="/contact" className="btn contact">Contact Us</Link>
	    </StyledContent>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />