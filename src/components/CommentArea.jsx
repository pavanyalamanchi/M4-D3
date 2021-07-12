import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: null
  }

  componentDidMount = async () => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, 
        {headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjYwMDYzNjgsImV4cCI6MTYyNzIxNTk2OH0.RyBgdzBZfvfr-2BIBjq26uY1zuJTRERtsxcuJCD0RJ8",
        }
        });
        console.log(resp)
        if(resp.ok){
            let response = await resp.json()
            this.setState({comments:response})
            console.log(typeof response)
            console.log('com area',this.state.comments)
        }
        else{
            console.log(resp.status)
        }
    } catch (error) {}
  };

  render() {
    return (
      <div
        className="d-flex justify-content-center flex-column"
      >
       { this.state.comments && (<><CommentList comment={this.state.comments}/>
       <AddComment/></>)}
      </div>
    );
  }
}

export default CommentArea;
