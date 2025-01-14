import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res)=> {
    res.json({message: 'hello world'})
})

// R - For get all data

app('/api', (req, res) => {
    
})

// C - For create a Data
app.post('/api', () => {

})

// U - for update data
app.put('/api/:id', () => {

})

// D - for delete data
app.delete('/api/:id', () => {

})

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
})