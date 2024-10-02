import * as React from 'react'
import styled from 'styled-components';

const StyledWrapper = styled.div`
    font-size: 0.8rem;
    margin-top: 2rem;
    button {
        padding: 0;
        border: none;
        background: transparent;
        color: var(--blue);
        cursor: pointer;
        margin-left: 0.5rem;
        text-decoration: underline;
    }
    p:not(:first-child) {
        display: none;
    }
`

const handleClick = (event) => {
    const parent = document.querySelector("#disclaimer")
    parent.querySelectorAll("p").forEach(el => {
        el.style.display = "block"
    })
    event.target.style.display = "none"
}


const Disclaimer = ({ children }) => {
    const firstChild = children[0]
    const otherChildren = children.slice(1)
    return (
        <StyledWrapper id="disclaimer">
            <p className="show">
                {firstChild.props.children}
                <button onClick={handleClick} type="button">show more</button>
            </p>
            {otherChildren}
        </StyledWrapper>
    )
}

export default Disclaimer