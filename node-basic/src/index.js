const express = require('express')
const app = express()

app.use(express.json())

app.get('/projects', (request, response)=>{
  const { name, age } = request.query
  console.log(name, age)
  return response.json([
    'Projeto 1',
    'Projeto 2'
  ])
})

app.post('/projects', (request, response)=>{
  const body = request.body
  console.log(body)
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ])
})

app.put('/projects/:id/:name', (request, response)=>{
  const { id, name } = request.params
  console.log(id, name)
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3'
  ])
})

app.delete('/projects/:id', (request, response)=>{
  return response.json([
    'Projeto 2',
    'Projeto 3'
  ])
})

app.listen(3333, () => {
  console.log('Funcionando 100% 🚀')
})