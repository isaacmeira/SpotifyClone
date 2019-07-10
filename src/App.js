import React, { Component } from "react";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import { Wrapper, Container, Content } from "./styles/components";

import Sidebar from "./components/Sidebar/";

import Header from "./components/Header";

import ErrorBox from "./components/ErrorBox";

import Player from "./components/Player";

import Routes from "./routes";

import "./config/reactotron";
import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Wrapper>
            <GlobalStyle />
            <Container>
              <Sidebar />
              <Content>
                <ErrorBox />
                <Header />
                <Routes />
              </Content>
            </Container>
            <Player />
          </Wrapper>
        </BrowserRouter>
      </Provider>
    );
  }
}
