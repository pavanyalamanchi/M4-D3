//import SingleBook from "./SingleBook";
import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) =>{

const [query,setQuery] = useState()

  //state = {
  //  query: "",
  //}

 
    return (
      <>
        <Form className="ml-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => {
                setQuery( e.target.value );
              }}
            />
          </Form.Group>
        </Form>
        
        <Row style={{marginLeft:'8rem'}}>
          
          {props.items
            .filter(ele => ele.title.toLowerCase().includes(query))
            .map(item => (
              <SingleBook book={item} key={item._id}/>
            ))}
            
        </Row>
        
      </>
    );
}
export default BookList;
