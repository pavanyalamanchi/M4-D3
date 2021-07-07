import {Badge} from 'react-bootstrap'

const MyBadge = (props) =>{
    return(
        <div className={'d-flex justify-content-center mb-3'}>
  <Badge variant={props.color}>{props.text}</Badge>
  </div>
    )
}

export default MyBadge