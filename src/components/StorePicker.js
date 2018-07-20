import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    event.preventDefault();
    // get the text from that input
    const storeName = this.myInput.value.value;
    // change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="store name"
          defaultValue={getFunName()}
        />
        <button type="submit">visit store</button>
      </form>
    );
  }
}

export default StorePicker;
