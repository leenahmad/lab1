import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class HorendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selcted: 0,
      Form: 0,
    };
  }
  submit = async (event) => {
    event.preventDefault();
    await this.setState({
      leen: event.target.opt.value,
    });
    console.log(this.state.leen);
  };

  openForm = () => {
    this.props.form(this.props.horns);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.submit}>
          <Form.Label></Form.Label>
          <Form.Select aria-label="Default select example" name="opt">
            <option>Open this select horns beast</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="WOW">WOW</option>
          </Form.Select>
          <Button
            // form={this.props.horns}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
export default HorendForm;
