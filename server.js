const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())

const rpmNumber ={
    'incomplete':{
        'warmUP' : 'unknown',
        'pace': 'unknown',
        'hills': 'unknown',
        'mixedTerrain': 'unknown',
        'intervals': 'unknown',
        'speedWork': 'unknown',
        'mountainClimb': 'unknown',
        'rideHome': 'unknown'
    },
    'rpm99':{
        'warmUP': 'TRUSTFALL: P!nk',
        'pace': 'Sunrise Sunset: Duplex Heart',
        'hills': 'What You Do to Me: SUB-x',
        'mixedTerrain': 'Remind Me: Tom Grennan',
        'intervals': 'Summit: Ruzer',
        'speedWork': 'Strong: Romy&Fred again',
        'mountainClimb': 'Barricade: Axwell',
        'rideHome': 'Anti-Hero: Taylor Swift'
    },
    'rpm98':{
        'warmUp': 'Feels So Right: Sun Lay',
        'pace': 'Boy: The Killers',
        'hills': 'Three Little Birds: Timmy Trumpet, Prezioso & 71 Digits',
        'mixedTerrain': 'All These Nights: Tom Grennan',
        'intervals': 'Offender: Dimension',
        'speedWork': 'A Sky Full of Stars: Coldplay',
        'mountainClimb': 'To The Other Side: Mario Ochoa',
        'rideHome': 'What a Night: Flo Rida'
    },
    'rpm97':{
        'warmUp': 'Groovejet(If This Aint Love): Spiller',
        'pace': 'Only You: Alessio & Sentinel',
        'hills': 'Starlight: The Supermen Lovers',
        'mixedTerrain': 'Use Somebody: Kings of Leon',
        'intervals': 'Children: Rameses B',
        'speedWork': 'The Purpose is You: Alpha 9',
        'mountainClimb': 'Shadows: Seven Lions, Wooli & Amidy',
        'rideHome': 'Green Green Grass: George Ezra'
    }
}


app.listen(process.env.PORT || PORT, () => {console.log(`listening on ${PORT}!`)})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rpm', (req,res) => {
    const names = req.params.rpm.toLowerCase()
    if (rpmNumber[names]){
        res.json(rpmNumber[names])
    }else {
        res.json(rpmNumber['incomplete'])
    }
})




