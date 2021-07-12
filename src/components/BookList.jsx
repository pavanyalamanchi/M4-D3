//import SingleBook from "./SingleBook";
import { Component } from "react";
import { Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    query: "",
  };

  render() {
    return (
      <>
        <Form className="ml-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Search"
              value={this.state.query}
              onChange={(e) => {
                this.setState({ query: e.target.value });
              }}
            />
          </Form.Group>
        </Form>
        
        <Row style={{marginLeft:'8rem'}}>
          
          {this.props.items
            .filter(ele => ele.title.toLowerCase().includes(this.state.query))
            .map(item => (
              <SingleBook book={item} key={item._id}/>
            ))}
            
        </Row>
        
      </>
    );
  }
}
export default BookList;
