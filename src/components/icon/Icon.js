import './icon.scss';
import React from 'react';
import { GrLinkedin } from 'react-icons/gr';

export default function Icon(props) {
    return (<div> 
        {
            (() => {
                if(props.type.toUpperCase() === 'LINKEDIN') {
                    return(
                        // eslint-disable-next-line
                        <a href={props.link} rel="noreferrer" target="_blank"><GrLinkedin className="icon-size"></GrLinkedin></a>
                    )
                }
            })()
        }
        <a href={props.link}></a>
    </div>)
}