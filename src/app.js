const express = require('express')
require('./db/conn')
const Quote = require('./models/quotes')
const app = express()
app.use(express.json())


// Create quotes 
app.post("/quotes",async (req,res)=>{
    try{
        console.log(req.body)
        const quote = new Quote(req.body)
        const createQuote = await quote.save()
        res.send(quote)
    }catch(e){
        res.status(404).send(e)
    }
  
})

// Read quotes 
app.get('/quotes', async(req,res)=>{
    try{
        const quotes = await Quote.find()
        res.status(200).send(quotes)
        
    }catch(e){
        res.status(404).send(e)
    }
})

// find by id 
app.get('/quotes/:id',async(req,res)=>{
    try{
        _id = req.params.id
        const quoteId = await Quote.findById(_id)
        res.status(200).send(quoteId)
    }catch(e){
        res.status(200).send(e)
    }
})

// Delete by id 
app.delete("/quotes/:id", async(req,res)=>{
    try{
        _id = req.params.id
        const deleteQuote = await Quote.findByIdAndDelete(_id)
        res.status(200).send(deleteQuote)
    }catch(e){
        res.status(400).send(e)
    }
})


// Update by id 
app.patch("/quotes/:id",async(req,res)=>{
    try{
        _id = req.params.id
        const updateQuote = await Quote.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.status(200).send(updateQuote)
    }catch(e){
        res.status.send(e)
    }
})


const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
})
