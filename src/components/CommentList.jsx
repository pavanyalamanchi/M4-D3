
import {ListGroup} from 'react-bootstrap'
import SingleComment from "./SingleComment";


const CommentList = (props) => {
  
    return (
      <ListGroup>
         { console.log('com list',props.comment) }
         {props.comment.map(com =>(
            <SingleComment comment={com}/>
         ))}
    {/*this.props.comment[0].comment*/}
      </ListGroup>
    );
}


export default CommentList;
