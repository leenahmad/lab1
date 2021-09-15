import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: 0,
    };
  }

  increaseNumberOfClicks = () => {
    this.setState({
      numOfClicks: this.state.numOfClicks + 1,
    });
  };

  openModal = () => {
    this.props.model(
      this.props.title,
      this.props.image_url,
      this.props.description
    );
  };

  render() {
    return (
      <>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="cardhorned"
              variant="top"
              src={this.props.image_url}
              alt={this.props.keyword}
              style={{ height: "250px" }}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>Number of Pets {this.state.numOfClicks}</Card.Text>
              <Button
                onClick={this.increaseNumberOfClicks}
                type="button"
                class="btn btn-danger"
                variant="primary"
              >
                vote here
              </Button> {' '}

              <Button
                onClick={this.openModal}
                slectbeast={this.props.slectbeast}
                title={this.props.title}
                image_url={this.props.image_url}
                alt={this.props.keyword}
                description={this.props.description}
                type="button"
                class="btn btn-danger"
                variant="primary"
              >
                modals
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}


