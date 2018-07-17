import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBar
