import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components';


const StyledWrapper = styled.div`
    display: flex;
    .address {
        flex: 1;
        a {
            background: var(--yellow);
            padding: 0.2rem 0.8rem;
            color: var(--blue);
            box-shadow: 0 5px 8px -2px #888888;
            &:hover, &:focus {
                color: #333;
            }
        }
    }
    .mail {
        flex: 2;
    }
`




const ContactPage = () => {
    const bannerImage = <StaticImage aspectRatio={4/1} transformOptions={{cropFocus: "north"}} layout="fullWidth" alt="Three smiling young people looking at a computer" src="../images/stock/contact.jpg" />
  return (
    <Layout banner={bannerImage}>
        <StyledWrapper>
            <div className="address">
                <h1>Call our office:<br/><a class="tel" href="tel:505-291-9900">505-291-9900</a></h1>
                <h2>24x7 (anytime) Emergency Service</h2>
                <h2>Operating throughout the Southwest</h2>
                <p>Headquartered since 1991 near the center of the southwestern USA in the culturally diverse city of Albuquerque, Designed Power proudly serves clients in Arizona, California, Colorado, Nevada, New Mexico, Texas, and Utah.</p>
                <p>Regular office hours are 9:00 AM – 5:00 PM Mountain Time, Monday – Friday.</p>
                <p>Give us a call!</p>
            </div>
            <div className="mail">
                
            </div>
        </StyledWrapper>
    </Layout>
  )
}


export const Head = () => <Seo title="Contact Us" />

export default ContactPage