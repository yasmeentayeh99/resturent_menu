import './App.css';
import Menu_Tab from "./Component/Tabs";
import Menu_Card from "./Component/menu";
import MenuContainer from "./Component/Menu-Container";
import axios from "axios";
import {useState} from "react";
import FreeSolo from "./Component/Search-Recipe";
import Search_Recipe from "./Component/Search-Recipe";


function App() {


  return (
        <div className="box">
        <h1 className="title">Food Recipe </h1>
        <Search_Recipe />
        </div>

  );
}

export default App;
