import React, { Component } from "react";
import { connect } from 'react-redux';
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { images } from "./images";
import { Scroll } from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
import { setSearchField } from './actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    this.setState({ images: images });
    //console.log(this.props.store.getState());
  }

  render() {
    const { images } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredAvengers = images.filter(image => {
      return (
        image.avenger.toLowerCase().includes(searchField.toLowerCase()) ||
        image.name.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    return !images.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <img
          className="pt2"
          src="https://fontmeme.com/permalink/190518/ac068f97191bc097a0ae3494c6ec34fe.png"
          alt="avengers-infinity-war-font"
          border="0"
        />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList images={filteredAvengers} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
