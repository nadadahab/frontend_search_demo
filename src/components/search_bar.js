/* eslint-disable no-alert, no-console */

import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./list";
import axios from "axios";

function SearchBar() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    getList(e.target.value.toLowerCase());
  };
  const getList = async (keywords) => {
    await axios({
      method: "get",
      url: "http://localhost:8080/searchDocument?name=" + keywords,
    })
      .then((res) => {
        console.log("res", res);
        setList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List list={list} />
    </div>
  );
}

export default SearchBar;
