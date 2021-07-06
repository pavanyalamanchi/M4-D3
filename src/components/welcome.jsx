import {Component} from 'react'
import {Container, Jumbotron} from 'react-bootstrap'

class JumboContent extends Component{
    render(){
        return(
            <Jumbotron fluid>
  <Container>
    
    <h1>Book Store</h1>
    <p>
      Get amazing content to read here.
    </p>
  </Container>
</Jumbotron>
        )
    }
}

export default JumboContent