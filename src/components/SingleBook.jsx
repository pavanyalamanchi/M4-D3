import {Card, Button, Col} from 'react-bootstrap'
import {Component} from 'react'
import '../App.css';

class SingleBook extends Component {

     bookClick=(e) => {
        e.target.parentNode.parentNode.classList.toggle('borderBook')
    }
    
    render(){
    return(
    <Col lg={4}>
        <Card>
            <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
  <Card.Title>{this.props.book.title}</Card.Title>
  <Card.Text>
    {this.props.book.asin}
  </Card.Text>
  <Button variant="primary" onClick={this.bookClick}>Click Me!</Button>
</Card.Body>
</Card>
</Col>
) 
    }
}


export default SingleBook