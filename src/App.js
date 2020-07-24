import React, { useState } from 'react';

import { getWeather } from './api/getWeather';

import { Header } from './components/global';
import { Search, Weather } from './components/elements';

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const handlePress = async (e) => {
    if(e.key === 'Enter') {
      const data = await getWeather(query);
      setWeather(data);
      setQuery('');
    }
  }

  const handleClick = async (e) => {
    const data = await getWeather(query);
    setWeather(data);
    setQuery('');
  }

  return (
    <div className="App">
      <Header />
      <Search onKeyPress={handlePress} onClick={handleClick} onChange={(e) => setQuery(e.target.value)} value={query} />
      <div style={{ margin: '80px auto'}}>
        {weather.main ? (
          <Weather data={weather} />
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default App;
