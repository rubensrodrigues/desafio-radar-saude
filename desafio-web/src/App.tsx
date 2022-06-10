import "antd/dist/antd.css";
import React from 'react';
import PeopleGrid from "./components/PeopleGrid";
import PeopleTitleHeader from "./components/PeopleTitleHeader";

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import PeopleNew from "./components/PeopleNew";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
          <PeopleTitleHeader/>
          <PeopleGrid/>
          </div>
        } />

        <Route path="/new-people" element={
        <div>
        <PeopleTitleHeader/>
        <PeopleNew/>
        </div>
        } />

        <Route path="/new-people/:id" element={
        <div>
        <PeopleTitleHeader/>
        <PeopleNew/>
        </div>
        } />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;