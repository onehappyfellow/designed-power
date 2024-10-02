import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Testimonial from '../components/testimonial'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components';
import Disclaimer from '../components/disclaimer'


const StyledMission = styled.p`
    color: var(--gray);
    font-weight: bold;
    font-size: 2rem;
    padding: 1rem;
    border-left: 5px solid var(--yellow);
`
const StyledTestimonials = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr; // spaced based on content length
`




const AboutPage = () => {
    const bannerImage = <StaticImage aspectRatio={5/1} transformOptions={{cropFocus: "north"}} layout="fullWidth" alt="Several people on computers, ready to help" src="../images/stock/about.png" />
  return (
    <Layout pageTitle="About Us" banner={bannerImage}>
        <h2>Designed Power... Your best source for the right solution!</h2>
        <p>Beginning as a manufacturer’s rep firm founded in 1991, Designed Power quickly became known as a go-to organization 
            for technical product support, application guidance, troubleshooting and "out of the box" solutions with an <strong>exclusive 
            and unique focus on customized electrical solutions</strong>. Today, whether as a factory 
            rep or a value-added reseller, DP continues to offer unparalleled support and solutions.</p>
        <p>By working closely with end users, specifying professional engineers, business partners, contractors, distributors 
            and procurement professionals, DP has successfully created scores of lasting and enduring relationships. As a 
            consequence, a substantial share of Designed Power's business is with repeat customers.</p>
        <StyledMission>Our Mission: <br/>Serving people and their companies by providing safe, reliable, best value electrical power solutions that will help them succeed and prosper.</StyledMission>

        <StyledTestimonials>
            <Testimonial author="Branch Manager" company="Electrical Wholesaler">
                <p>Just wanted to say Thanks Very Much for help and service with [the] order yesterday. <strong>It’s not often 
                    we receive such service and I just want to make sure you know how much it is appreciated…</strong></p>
            </Testimonial>
            <Testimonial author="VP & General Manager" company="Major Defense Contractor">
                <p>I wanted to express my personal appreciation for<strong> the outstanding response we received from your 
                    company </strong>following a Jan 30 fire at our facility here in Albuquerque&#8230; The fire destroyed a high-voltage 
                    transformer and electrical distribution panel that supports key production areas in our factory&#8230; You were 
                    on our site to assist almost before the fire department vehicles left our parking lot. <strong>That kind of response 
                    is nothing short of phenomenal.</strong> Our products are delivered to U.S. armed forces and key government contractors 
                    including Lockheed Martin and Boeing. Delays not only cost thousands of dollars per day if flight tests are interrupted, 
                    they can also impact force readiness. <strong>Thanks to your expert assistance, our production schedules barely missed 
                    a beat.</strong> In fact, February production deliveries exceeded plan by approximately 90%. Please accept my heartfelt 
                    thanks for your invaluable assistance. <strong>At [our company], we talk of going beyond customer satisfaction to achieve 
                    customer delight. You have an extremely delighted customer at [our company].</strong></p>
            </Testimonial>
            <Testimonial author="Manager, Strategic Sourcing" company="Major Oil Company">
                <p>I want you to know how <strong>sincerely appreciative we are of Designed Power for their effective and professional 
                    assistance</strong> in locating and handling a replacement transformer for our [facility]. Your assistance allowed 
                    [our company] to begin gas lift compression 34 days earlier than would have been possible otherwise. Our production 
                    was reduced by 15,000 barrels of oil per day while we were without power. We are indeed grateful for your assistance 
                    and know that you will share our appreciation with your entire staff. <strong>As a purchasing professional of thirty 
                    years, I cannot remember having received better service or performance. You exceeded all our expectations and have a 
                    very satisfied customer.</strong></p>
            </Testimonial>
        </StyledTestimonials>

        <Disclaimer>
            <p><strong>DISCLAIMER:</strong> Designed Power (DP) is a sales company and not a professional engineering (PE) firm.</p>
            <p>DP can provide application assistance and insight into technical challenges associated with electrical power equipment, but such assistance is not a substitute for professionally engineered solutions. Any products or engineered solutions sold by DP, as well as any engineering services or other technical field services sold by DP, are supplied and/or performed by the manufacturers of those products or systems, or by other trained and qualified third parties.</p>
            <p>If you are not qualified to assess the suitability of a solution proposed by DP, we recommend you hire or consult with a PE firm to assist and guide you in evaluating it. Electrical power is inherently dangerous and improper use of electrical equipment or any work performed improperly or by unqualified personnel can result is death, injury and/or property destruction. Please respect the hazards and risks inherent to electricity and do not proceed with any purchase, installation or other electrical work without obtaining adequate training and expertise, or by retaining other qualified professionals to guide you.</p>
            <p>Products and services sold by DP are covered under the standard warranty terms of their manufacturers and/or providers. DP makes no warranties, expressed or implied, of any type. This exclusion includes any warranty related to merchantability or suitability for a specific purpose.</p>
        </Disclaimer>



    </Layout>
  )
}


export const Head = () => <Seo title="About Us" />

export default AboutPage








