import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input
          placeholder="test"
          value = {this.state.term}
          onChange = {e => this.setState({ term: e.target.value})}
        />
        <button
          onClick={() => alert(this.state.term)}
        >
          Click
        </button>
      </div>
    );
  }

}