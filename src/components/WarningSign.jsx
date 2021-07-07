import {Alert} from 'react-bootstrap'

const Warning = (props) => {
return(
    <Alert variant='warning' className={'d-flex justify-content-center'}>
    {props.text}
  </Alert>
)
}

export default Warning