import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
  };

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    this.props.addFish(fish);
    // refresh the form
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          type="text"
          ref={this.nameRef}
          name="name"
          placeholder="Name"
          required
        />
        <input
          type="text"
          ref={this.priceRef}
          name="price"
          placeholder="Price"
          required
        />
        <select name="Status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          ref={this.descRef}
          name="desc"
          placeholder="Desc"
          required
        />
        <input
          type="text"
          ref={this.imageRef}
          name="image"
          placeholder="Image"
          required
        />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
