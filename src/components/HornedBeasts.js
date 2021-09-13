import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0,
    };
  }

  increaseVote = () => {
    this.setState({
      vote: this.state.vote + 1,
    });
  };

  render() {
    return (
      <Card style={{ width: "18rem"}}>
        <Card.Title>{this.props.title}</Card.Title>
        <img
          src={this.props.image_url}
          width={200}
        />
        <Card.Body>
          <Card.Text>{this.props.description}</Card.Text>

          <Card.Text>Votes {this.state.vote}</Card.Text>

          <button class="text-center" onClick={this.increaseVote} type="button" class="btn btn-outline-danger">vote</button>

          {/* <Button onClick={this.increaseVote} variant="primary"> VOTES </Button> */}
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;
