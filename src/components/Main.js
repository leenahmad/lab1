import React from "react";
import HornedBeast from "./HornedBeasts";
// import displayImg from "./data.json";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

class Main extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <div>
        <Card>
          <Row xs={1} md={4} class="g-4">
            {this.props.data.map((element, index) => {
              return (
                <HornedBeast
                  model={this.props.model}
                  form={this.props.form}
                  selectedBeast={element.displayImg}
                  key={index}
                  title={element.title}
                  image_url={element.image_url}
                  description={element.description}
                  keyword={element.keyword}
                  horns={element.horns}
                  openModal={this.props.openModal}
                />
              );
            })};
          </Row>
        </Card>
      </div>
    );
  }
}

export default Main;
