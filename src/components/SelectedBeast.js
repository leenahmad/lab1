import React from "react";
import { Modal } from "react-bootstrap";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.isOpen} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.props.image_url}
              alt={this.props.keyword}
              style={{ height: "250px", width: "16rem" }}
            />
            <p>{this.props.description}</p>
            <h4>{this.props.horns}</h4>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
