require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { fetchStandings, fetchTeams } = require('./api');


//since we are using two different ports (orgins) one for the client side and one for the server side, we need to use CORS - Cross-Origin Resource Sharing in order to let the browser know that we allow this. 
app.use(cors());

//route for getting standings in our client side
app.get('/api/standings', async (req, res) => {
    try {
        const standings = await fetchStandings();
        res.json(standings);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch standings' });
    }
});

app.get('/api/teams', async (req, res)=>{
    try {
        const teams = await fetchTeams(); 
        res.json (teams);
    }catch(error){
        console.log(error)
        res.status (500).json({error: 'Failed to fetch standings'});
    }
    
})

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});
