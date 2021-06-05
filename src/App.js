import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/layouts/Navbar";
import Search from "./component/breakingbad/Search";
import Quotes from "./component/breakingbad/Quotes";
import Characters from "./component/breakingbad/Characters";
import axios from "axios";
import "./App.css";
import { findAllByDisplayValue } from "@testing-library/react";

class App extends Component {
  state = {
    loading: false,
    characters: [],
    quotes: [],
    alert: "",
  };
  getChs = async () => {
    this.setState({ loading: true });
    const res = await axios.get("https://breakingbadapi.com/api/characters");

    this.setState({ loading: false, characters: res.data });
  };
  getCh = async (name) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://breakingbadapi.com/api/characters?name=${name}`
    );
    console.log(res.data);
    this.setState({ loading: false, characters: res.data });
  };
  getQuotes = async () => {
    this.setState({ loading: true });
    const res = await axios.get("https://breakingbadapi.com/api/quotes");
    this.setState({ loading: false, quotes: res.data });
  };
  setAlert = (alert) => {
    this.setState({ alert });
    setTimeout(() => {
      this.setState({ alert: "" });
    }, 5000);
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div className='w-full'>
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search getCh={this.getCh} />
                    <Characters
                      getChs={this.getChs}
                      characters={this.state.characters}
                      loading={this.state.loading}
                    />
                  </Fragment>
                )}
              />
              <Route
                path='/quotes'
                render={(props) => (
                  <Fragment>
                    <Quotes
                      quotes={this.state.quotes}
                      getQuotes={this.getQuotes}
                      loading={this.state.loading}
                    />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
