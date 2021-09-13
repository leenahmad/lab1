import React from "react";
import HornedBeasts from "./HornedBeasts";
import ImgArr from "./data.json";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Row xs={1} md={5} className="g-4">
          {ImgArr.map((element, index) => {
            return (
              <HornedBeasts
                key={index}
                title={element.title}
                image_url={element.image_url}
                description={element.description}
                keyword={element.keyword}
                horns={element.horns}
              />
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Main;
