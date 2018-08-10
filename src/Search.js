import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    );
  }
}

export default SearchBar
