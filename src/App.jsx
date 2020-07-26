import React from 'react';

import { Router } from "@reach/router"

//mine
import CardsList from './CardsList';
import './AllStyles.css';
import Navbar from './Navbar';
import Foot from './Footer';
import CardPage from './CardPage';
import Homepage from './Homepage';
import AboutProject from './AboutProject';
import AboutAuthor from './AboutAuthor';

const title = "Lean Cards";
const year = "2020";
const author = "Bernat Pericàs Serra";

function App() {
  return (
    <div className="App_container">
      <Navbar />
      <br />
      <Router>
        <Homepage default />
        <CardsList path="cards_list" />
        <CardPage path="cards/:id" />
        <AboutProject path="about_project" />
        <AboutAuthor path="about_author" author={author} />
      </Router>

      <Foot title={title} year={year} author={author} />
    </div>

  )
}

export default App;