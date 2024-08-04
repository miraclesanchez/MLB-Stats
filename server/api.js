require('dotenv').config();
const API_KEY = process.env.API_KEY;

const fetchStandings = async () => {
  const url = `https://api.sportsdata.io/v3/mlb/scores/json/Standings/2024?key=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

module.exports = { 
    fetchStandings 
};