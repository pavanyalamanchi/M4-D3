import {ListGroupItem} from "react-bootstrap"
import {TiDeleteOutline} from 'react-icons/ti'

const SingleComment = (props) => (
    <ListGroupItem className='d-flex justify-content-between'>
        {props.comment.comment}
       <span><TiDeleteOutline className='react-icon' onClick={() => DeleteIcon(props.comment._id)}/></span> 
    </ListGroupItem>
)

const DeleteIcon = async (asin) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin,{
            method: 'DELETE',
            headers:{
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjYwMDYzNjgsImV4cCI6MTYyNzIxNTk2OH0.RyBgdzBZfvfr-2BIBjq26uY1zuJTRERtsxcuJCD0RJ8'
            }
        })
        if(response.ok){
            alert('Successsfully deleted')
        }
        else{
            alert('something went wrong')
        }
    } catch (error) {
        
    }
}

export default SingleComment