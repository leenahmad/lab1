import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class HorendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      Form: 0,
    };
  }
  form = (event) => {
    event.preventDefault();
    this.setState({
      selected: event.target.breed.value,
    });
    console.log(this.selected);
  };

  render() {
    return (
      <>
        <Form.Label></Form.Label>
        <Form.Select name="breed" aria-label="Default select example">
          <option>Open this select horns beast</option>
          <option value="angora">1</option>
          <option value="persian">2</option>
          <option value="baldi">3</option>
          <option value="baldi">WOW</option>
        </Form.Select>
        <Button form={this.props.horns} variant="primary" type="submit">
          Submit
        </Button>
      </>
    );
  }
}
export default HorendForm;
