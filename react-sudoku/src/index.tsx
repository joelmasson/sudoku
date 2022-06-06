import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";

import { Card, Content, Grid, Title } from 'components'
import { unregister, configureStore } from 'core';
import { GlobalStyle, theme } from 'styles';

const store = configureStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Content data-cy="content">
          <Title data-cy="title">Hello world</Title>
          <Card><Grid></Grid></Card>
        </Content>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

unregister()
