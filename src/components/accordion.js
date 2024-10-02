import * as React from 'react'
import styled from 'styled-components';

const StyledWrapper = styled.div`
    input[name=panel] {
        display: none;
    }
    label {
        position: relative;
        display: block;
        padding: 1em;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        font-size: 1.5em;
        color: #666;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.865, 0.14, 0.095, 0.87);
    }
    label:after {
        content: "+";
        position: absolute;
        right: 1em;
        width: 1em;
        height: 1em;
        line-height: 1em;
        color: #eee;
        text-align: center;
        border-radius: 50%;
        background: #1459b3;
    }
    label:hover {
        color: #1459b3;
    }
    input:checked + label {
        color: #1459b3;
    }
    input:checked + label:after {
        content: "-";
        line-height: 0.8em;
    }
    div {
        overflow: hidden;
        max-height: 0em;
        position: relative;
        padding: 0 1.5em;
        background: #eee;
        border-left: 4px solid #1459b3;
        transition: all 0.4s cubic-bezier(0.865, 0.14, 0.095, 0.87);
        ul {
            list-style-type: none;
        }
    }
    input[name=panel]:checked ~ div {
        max-height: 60em;
    }
`

const id_from_title = (title) => {
    return title.replace(" ","-")
}

const Accordion = ({ title, children }) => {
    return (
        <StyledWrapper>
            <input type="checkbox" name="panel" id={id_from_title(title)} />
            <label for={id_from_title(title)}>{title}</label>
            <div>
                {children}
            </div>
        </StyledWrapper>
    )
}

export default Accordion