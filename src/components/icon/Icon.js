import './icon.scss';
import React, { useState } from 'react';
import { GrLinkedin } from 'react-icons/gr';

export default function Icon(props) {
    return (<div> 
        {
            (() => {
                switch(props.type.toUpperCase()) {
                        case "LINKEDIN" : 
                            return(
                                <a href={props.link} target="_blank"><GrLinkedin className="icon-size"></GrLinkedin></a>
                            )
                    }
            })()
        }
        <a href={props.link}></a>
    </div>)
}