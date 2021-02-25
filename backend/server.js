import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()


const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/summonerName/:name',async (req,res) =>{
    console.log(req.params.name)
    try {
        const getProperties = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.name}?api_key=${process.env.API_RIOT}`)
        const getRank = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${getProperties.data.id}?api_key=${process.env.API_RIOT}`)
        res.json(getRank.data[0])
        
    } catch (error) {
        console.log(error)
        res.json(
            {
                message:'deu erro'
            }
        )
    }
   
})
app.listen(8000)


