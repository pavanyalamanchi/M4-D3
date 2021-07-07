import {Component} from 'react'
import {Form} from 'react-bootstrap'

class FilterBook extends Component {
    state={
        query:''
    }

    render(){
        return(
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label></Form.Label>
    <Form.Control type="text" placeholder="Search" value={this.state.query} onChange={(e) => {
        this.setState({query: this.state.query})
    }}/>
  </Form.Group>
</Form>
        )
    }
}

export default FilterBook