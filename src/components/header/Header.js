import Icon from '../icon/Icon'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Header(props) {
    return(
        <Row className={props.className}>
          <Col >
            <h4>{props.name}</h4>
          </Col>
          <Col>
            <div className="float-end">
              {
                ((socialNetworks) => {
                  if (socialNetworks) {
                    let map = socialNetworks.map((network) =>
                      <Icon type={network.type} link={network.url} ></Icon>
                    )
                    return map
                  }
                })(props.socialNetworks)
              }
            </div>
          </Col>
      </Row>
    )
}