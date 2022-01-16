import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as _ from 'lodash';


export default function Details(props) {
    return (
        <div>
            <h4>
                Other Details
            </h4>
            {
                ((details) => {
                    if (details && _.keys(details).length > 0) {
                        let detailsRenderObj = _.keys(details).map((key) => {
                            let label = _.words(key).map((word => _.startCase(word))).join(' ');
                            let value = details[key];
                            return (
                                <Row>
                                    <Col>
                                        <h6>{label}</h6>
                                    </Col>
                                    <Col>
                                        <label>{value}</label>
                                    </Col>
                                </Row>
                            )
                        })
                        return detailsRenderObj;
                    }
                })(props.details)
            }
        </div>
    )

}