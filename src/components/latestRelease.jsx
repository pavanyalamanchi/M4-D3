import {Component} from 'react'
import {Container, Row, Col, Carousel} from 'react-bootstrap'
import items from '../data/fantasy.json'

class LatestRelease extends Component{
    render(){
        return(
            <Container>
                <Row className="justify-content-center mt-3">
                    <Col xs={12} md={6}>
                        <Carousel>
                            {
                                items.map(item => (
                                    <Carousel.Item key={item.id}>
                                        <img
                                            className="d-block w-100"
                                            src={item.img}
                                            alt="First slide"
                                        />
                                            <h3>{item.title}</h3>
                                            <p>{item.category}</p>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                </Row>
                </Container>
        )
    }
}

export default LatestRelease