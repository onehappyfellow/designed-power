import * as React from 'react'
import styled from 'styled-components';
import { MdPerson } from "react-icons/md";

const StyledTestimonial = styled.div`
    position: relative;
    margin: 0 0.5em;
    .testimonial-box {
        position: relative;
        background: #eee;
        padding: 12px 15px;
        border-radius: 15px;
        border: 1px solid #ccc;
    }
    .blockquote {
        font-style: italic;
        font-size: 0.85rem;
    }
    .testimonial-arrow {
        border-color: #eee transparent;
        border-style: solid;
        border-width: 12px 12px 0px 0px;
        width: 0;
        height: 0;
        position: absolute;
        bottom: -12px;
        left: 20px;
        z-index: 9;
    }
    .testimonial-arrow-border {
        border-color: #ddd transparent;
        border-style: solid;
        border-width: 14px 14px 0px 0px;
        width: 0;
        height: 0;
        position: absolute;
        bottom: -14px;
        left: 19px;
        z-index: 8;
    }
    .testimonial-author {
        margin-top: 15px;
        color: #444;
        display: flex;
        gap: 0.2rem;
        align-items: center;
        font-size: 0.8rem;
        .icon {
            font-size: 2.5rem;
        }
    }
`

const Testimonial = ({ author, company, children }) => {


    return (
        <StyledTestimonial>
            <div className="testimonial-box">
                <span>
                    <blockquote className="blockquote">
                        {children}
                    </blockquote>
                    <div className="testimonial-arrow"></div>
                    <div className="testimonial-arrow-border"></div>
                </span>
            </div>
            <div className="testimonial-author">
                <MdPerson className="icon" />
                <div>
                    {author}<br />
                    <strong>{company}</strong>
                </div>
            </div>
        </StyledTestimonial>
    )
}

export default Testimonial