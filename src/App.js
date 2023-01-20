import React from 'react';
import './App.css';
import Header from "./components/Header/header.js";
import FilterComponent from './components/Filter/filterComponent';
import LaunchTable from './components/LaunchTable/tableComponent';
import { Provider } from 'react-redux';
import store from './redux/store'
import {
  Grid,
  Container
} from "@material-ui/core";

function App() {
  return (
    <Provider store={store} >
      <Header />
      <Container>
        <Grid container direction="column" >
          <Grid item>
            <FilterComponent />
          </Grid>
          <Grid item>
            <LaunchTable />
          </Grid>
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;
