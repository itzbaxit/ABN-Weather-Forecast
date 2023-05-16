import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import "./components/Header.css";
import Search from "./components/Search";
import "./components/Search.css";
import Card from "./components/Card";
import "./components/Card.css";
import axios from "axios";
function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  };
  const searchWeatherHandler = () => {
    if (search !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=844ef5767a95cfb4fbdfaf2fa243b192&units=metric`
        )
        .then((response) => {
          console.log(response.data);
          setWeather(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="App">
      <Header />
      <Search
        searchData={search}
        eventHandler={changeSearch}
        searchWeather={searchWeatherHandler}
      />
      <Card weatherData={weather} />
    </div>
  );
}

export default App;
