import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";
import assest from "./components/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,

      selectedBeast: assest[0],
    };
  }

  openModal = (slectbeast) =>
    this.setState({ isOpen: true, SelectedBeast: assest[slectbeast] });
  closeModal = () => this.setState({ isOpen: false });
  render() {
    return (
      <>
        <Header />
        <Main asses={assest} openModal={this.openModal} />
        <Footer />
        <SelectedBeast
          isOpen={this.state.isOpen}
          closeModal={this.closeModal}
          selectedBeast={this.state.selectedBeast}
          title={this.state.selectedBeast.title}
          image_url={this.state.selectedBeast.image_url}
          alt={this.state.selectedBeast.keyword}
          description={this.state.selectedBeast.description}
        />
      </>
    );
  }
}
export default App;
