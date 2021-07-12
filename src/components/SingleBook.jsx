import { Card} from "react-bootstrap";
import { Component } from "react";
import "../App.css";
import CommentArea from './CommentArea'

class SingleBook extends Component {

state = {
  selected: false
}

  bookClick = (e) => {
    e.target.parentNode.classList.toggle("borderBookToggle");
    this.setState({selected: !this.state.selected})
  };

  render() {
    return (
            <div className='d-flex flex-column align-items-center'>
        <Card style={{ width: '18rem' }} className='borderBook' onClick={this.bookClick}>
          <Card.Img variant="top" src={this.props.book.img} style={{height: '26rem'}}/>
          <Card.Body>
            <Card.Title className='text-ellipsis'>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.asin}</Card.Text>
            
          </Card.Body>
        </Card>
        {
          this.state.selected && <CommentArea asin={this.props.book.asin}/>
        }
        </div>
    );
  }
}

export default SingleBook;
