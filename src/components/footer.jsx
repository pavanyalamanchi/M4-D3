import {Component} from 'react'
import { Row } from 'react-bootstrap'

class Footer extends Component{
    render(){
        return(
            <Row className="justify-content-center fixed-bottom bg-dark text-white flex-column align-items-center">
            <p>This is Footer</p>
            <p>Content</p>
        </Row>
        )
    }
}

export default Footer