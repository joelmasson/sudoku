import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ThemeProvider } from "styled-components";

import { Content, Title, Game, Scoreboard, Navigation } from 'components'
import { register, configureStore } from 'core';
import { GlobalStyle, theme } from 'styles';

const { persistor, store } = configureStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Content data-cy="content">
              <Navigation />
              <Title data-cy="title">Sudoku</Title>
              <Routes>
                <Route path="/" element={<Game />}></Route>
                <Route path="scores" element={<Scoreboard />}></Route>
              </Routes>
            </Content>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode >
);

register()
