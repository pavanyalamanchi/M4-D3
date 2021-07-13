import { Card} from "react-bootstrap";
import { useState } from "react";
import "../App.css";
import CommentArea from './CommentArea'

const SingleBook = (props) => {

const [selected, setSelected] = useState(false)

//state = {
 // selected: false
//}

  const bookClick = (e) => {
    e.target.parentNode.classList.toggle("borderBookToggle");
    setSelected( !selected)
  };

  
    return (
            <div className='d-flex flex-column align-items-center'>
        <Card style={{ width: '18rem' }} className='borderBook' onClick={bookClick}>
          <Card.Img variant="top" src={props.book.img} style={{height: '26rem'}}/>
          <Card.Body>
            <Card.Title className='text-ellipsis'>{props.book.title}</Card.Title>
            <Card.Text>{props.book.asin}</Card.Text>
            
          </Card.Body>
        </Card>
        {
          selected && <CommentArea asin={props.book.asin}/>
        }
        </div>
    );
}

export default SingleBook;
