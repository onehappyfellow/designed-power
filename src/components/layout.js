import * as React from 'react'
import Navigation from './navigation'
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import "./reset.css"

const StyledWrapper = styled.div`
  min-height: 140px;
`
const StyledTitle = styled.h1`
  font-size: 2em;
  margin: 1em 0;
`
const StyledMain = styled.main`
  max-width: var(--maxContentWidth);
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`
const StyledFooter = styled.footer`
  background-color: var(--gray);
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .copyright {
    background-color: #666;
    color: #aaa;
    font-size: 0.8rem;
    width: 100%;
    text-align: center;
  }
  .logo {
    padding: 1rem;
  }
`

const Layout = ({ pageTitle, banner, children }) => {
  return (
    <div>
      <Navigation />
      <StyledWrapper>
        { banner }
      </StyledWrapper>

      <StyledMain>
        {pageTitle && (
          <StyledTitle>{ pageTitle }</StyledTitle>
        )}
        {children}
      </StyledMain>

      <StyledFooter>
        <div className="copyright">
          <p>Copyright {new Date().getFullYear()} Designed Power</p>
        </div>
        <div className="logo">
          <StaticImage alt="Designed Power Logo" src="../images/brand/designedpower-vertical.png"  />
        </div>
      </StyledFooter>
    </div>
  )
}

export default Layout