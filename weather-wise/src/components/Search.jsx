import React, { useState } from "react";
import axios from 'axios';

const Search = ({setWeatherDetails}) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
    setSearch(null)
  }


  const handleKeyDown = async (e) => {
    if(e.key != 'Enter') return ;
    

    const options = {
      method: 'GET',
      url: 'https://weather-api167.p.rapidapi.com/api/weather/forecast',
      params: {
        place: search,
        cnt: '3',
        units: 'standard',
        type: 'three_hour',
        mode: 'json',
        lang: 'en'
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
        Accept: 'application/json'
      }
    };

    try {
      const response = await axios.request(options);
      setWeatherDetails(response.data);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="search-section">
      <div className="search-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>

        <input type="text" placeholder="Search for a city" onChange={handleInput} onKeyDown={handleKeyDown} />
      </div>
    </div>
  );
};

export default Search;
