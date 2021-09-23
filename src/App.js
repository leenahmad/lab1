import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";
import data from "./components/data.json";
import HorendForm from "./components/HornedForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedBeast: data[0],
      title: " ",
      image_url: " ",
      description: " ",
      data: data,
      form: 0,
    };
  }
  model = (title, image_url, description, horns) =>
    this.setState({
      selectedBeast: this.model,
      title: title,
      image_url: image_url,
      description: description,
      horns: horns,
      isOpen: true,
    });

  openModal = (selectedBeast) => {
    console.log(selectedBeast);
    this.setState({ isOpen: true, selectedBeast: data[selectedBeast] });
  };
  closeModal = () => this.setState({ isOpen: false });

  form = (horns) => {
    this.setState({
      selectedBeast: this.form,
      Form: Number(horns),
      horns: horns,
      isOpen: true,
    });
  };

  horn = (numberOfhorns) => {
    let filterHorns = [];
    // eslint-disable-next-line eqeqeq
    filterHorns = data.filter((elemnt) => elemnt.horns == numberOfhorns);
    console.log(filterHorns);

    this.setState({
     data: filterHorns,
    });
  };

  render() {
    return (
      <>
        <Header />
        <HorendForm horn={this.horn} />
        <Main
          data={this.state.data}
          openModal={this.openModal}
          model={this.model}
          form={this.form}
        />
        <Footer />
        <SelectedBeast
          isOpen={this.state.isOpen}
          model={this.model}
          closeModal={this.closeModal}
          selectedBeast={this.state.selectedBeast}
          title={this.state.title}
          image_url={this.state.image_url}
          alt={this.state.keyword}
          description={this.state.description}
          horns={this.props.horns}
        />
      </>
    );
  }
}
export default App;
