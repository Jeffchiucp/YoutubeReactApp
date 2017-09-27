import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }


  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

// we made a lot of changes on the search bar
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
// we refactor the code for onInputChange on the search bar
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
