import SingleBook from "./SingleBook";


const BookList = (props) =>
  props.items.map((item) => (
  
        
      <SingleBook book={item} />
      
    
  ));

export default BookList;
