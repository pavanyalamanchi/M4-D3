import {InputGroup, FormControl} from 'react-bootstrap'

const AddComment = () => (
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text variant='primary' id="basic-addon2">Add Comment</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
)

export default AddComment