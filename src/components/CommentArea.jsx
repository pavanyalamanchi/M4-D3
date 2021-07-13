import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const CommentArea = (props) => {


  const [comments, setComments] = useState(null)

  //state = {
    //comments: null
  //}

  useEffect( () => {
    const fetch = async () => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.asin, 
        {headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjYwMDYzNjgsImV4cCI6MTYyNzIxNTk2OH0.RyBgdzBZfvfr-2BIBjq26uY1zuJTRERtsxcuJCD0RJ8",
        }
        });
        console.log(resp)
        if(resp.ok){
            let response = await resp.json()
            setComments(response)
            console.log(typeof response)
            console.log('com area',comments)
        }
        else{
            console.log(resp.status)
        }
    } catch (error) {}
  }
  fetch()
  } ,[])

  
    return (
      <div
        className="d-flex justify-content-center flex-column"
      >
       { comments && (<><CommentList comment={comments}/>
       <AddComment/></>)}
      </div>
    );
  
}

export default CommentArea;
