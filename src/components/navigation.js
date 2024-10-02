import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const StyledNavWrap = styled.div`
    background-color: rgba(3, 3, 3, 0.8);
    padding: 0.2rem 0;
    margin-top: 20px;
    position: absolute;
    width: 100%;
    z-index: 1000;
`
const StyledNavWrapInner = styled.div`
    max-width: var(--maxContentWidth);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledLogo = styled.div`
    display: inline-block;
    max-width: 60%;
`
const StyledNav = styled.nav`
    display: inline-block;
    width: auto;
    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: #ccc;
        padding: 0.5rem 2rem;
        &:hover, &:focus {
            color: #fff;
            background-color: rgba(0, 0, 0, 0.2);
        }
    }
`


const Navigation = () => {
    return (
        <StyledNavWrap>
            <StyledNavWrapInner>
                <StyledLogo>
                    <Link to="/">
                        <StaticImage alt="Designed Power" src="../images/brand/designedpower-horizontal.png" />
                    </Link>
                </StyledLogo>
                <StyledNav>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/manufacturers">Manufacturers</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </StyledNav>
            </StyledNavWrapInner>
        </StyledNavWrap>
    )
}

export default Navigation
      