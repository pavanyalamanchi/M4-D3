import { Component } from "react";
import {ListGroup} from 'react-bootstrap'
import SingleComment from "./SingleComment";


class CommentList extends Component {
  render() {
    return (
      <ListGroup>
         { console.log('com list',this.props.comment) }
         {this.props.comment.map(com =>(
            <SingleComment comment={com}/>
         ))}
    {/*this.props.comment[0].comment*/}
      </ListGroup>
    );
  }
}


export default CommentList;
