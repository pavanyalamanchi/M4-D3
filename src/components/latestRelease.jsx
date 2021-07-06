import {Component} from 'react'
import {Container, Row, Col, Carousel} from 'react-bootstrap'
import items from '../data/fantasy.json'
import history from '../data/history.json'
import romance from '../data/romance.json'
import horror from '../data/horror.json'
import scifi from '../data/scifi.json'

class LatestRelease extends Component{
    render(){
        return(
            <Container>
                <Row className="justify-content-center mt-3">
                    <Col xs={12} md={2} lg={2}>
                        <Carousel>
                            {
                                items.map(item => (
                                    <Carousel.Item key={item.id}>
                                        <img
                                            className="d-block w-100"
                                            src={item.img}
                                            alt="First slide"
                                        />
                                            
                                            <p>{item.category}</p>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                        <Carousel>
                            {
                                history.map(item => (
                                    <Carousel.Item key={item.id}>
                                        <img
                                            className="d-block w-100"
                                            src={item.img}
                                            alt="First slide"
                                        />
                                            
                                            <p>{item.category}</p>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                        <Carousel>
                            {
                                horror.map(item => (
                                    <Carousel.Item key={item.id}>
                                        <img
                                            className="d-block w-100"
                                            src={item.img}
                                            alt="First slide"
                                        />
                                           
                                            <p>{item.category}</p>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                        <Carousel>
                            {
                                romance.map(item => (
                                    <Carousel.Item key={item.id}>
                                        <img
                                            className="d-block w-100"
                                            src={item.img}
                                            alt="First slide"
                                        />
                                           
                                            <p>{item.category}</p>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                        <Carousel>
                            {
                                scifi.map(item => (
                                    <Carousel.Item key={item.id}>
                                        <img
                                            className="d-block w-100"
                                            src={item.img}
                                            alt="First slide"
                                        />
                                            
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