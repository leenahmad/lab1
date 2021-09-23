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
    this.props.horn(event.target.horn.value);
    await this.setState({
      horns: event.target.horn.value,
    });
    console.log(this.state.horns);
  };

  openForm = () => {
    this.props.form(this.props.horns);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.submit}>
          <Form.Label></Form.Label>
          <Form.Select aria-label="Default select example" name="horn">
            <option>Open this select horns beast</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">WOW</option>
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


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";

// class FormH extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Form: 0,
//     };
//   }

//   hornsForm = (event) => {
//     event.preventDefault();
//     this.props.horn(event.target.hornsname.value);
//     this.setState({
//       horns: event.target.hornsname.value,
//     });
//   };

//   openForm = () => {
//     this.props.hornsForm(this.props.horns);
//   };
//   render() {
//     return (
//       <>
//         <Form onSubmit={this.hornsForm}>
//           <FloatingLabel label="Works with selects">
//             <Form.Select aria-label="Default select example" name="hornsname">
//               <option>chose your fav horns</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="100">100</option>
//             </Form.Select>
//             <Button
//               // form={this.props.horns}
//               variant="primary"
//               type="submit"
//             >
//               Submit
//             </Button>
//           </FloatingLabel>
//         </Form>
//       </>
//     );
//   }
// }
// export default FormH;
