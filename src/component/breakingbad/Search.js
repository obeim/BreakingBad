import React, { Fragment, Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
    if (this.state.text) {
      this.props.getCh(this.state.text);
    }
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className='container mx-auto my-5'>
        <form className='w-full flex justify-center' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            value={this.state.text}
            placeholder='Search for Characters'
            onChange={this.onChange}
            className='w-11/12  p-2 border-4 outline-none focus:border-green-900 border-green-300'
          />
        </form>
      </div>
    );
  }
}

export default Search;
