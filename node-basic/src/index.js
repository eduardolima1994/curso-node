const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())

const projects = []

app.get('/projects', (request, response)=>{
  return response.json(projects)
})

app.post('/projects', (request, response)=>{
  const { name, owner } = request.body
  const project = {
    id: uuidv4(),
    name,
    owner
  }
  projects.push(project)
  return response.status(201).json(project)
})

app.put('/projects/:id', (request, response)=>{
  const { id } = request.params
  const { name, owner } = request.body
  
  const projectIndex = projects.findIndex(p => p.id === id)

  if (projectIndex < 0){
    return response.status(404).json({ error: 'Project not found' })
  }
  
  if (!name || !owner) {
    return response.status(400).json({ error: 'Name nd owner are required' })
  }

  const project = {
    id,
    name,
    owner
  }

  projects[projectIndex] = project

  return response.json(project)
})

app.delete('/projects/:id', (request, response)=>{
  const { id } = request.params
  
  const projectIndex = projects.findIndex(p => p.id === id)

  if (projectIndex < 0){
    return response.status(404).json({ error: 'Project not found' })
  }

  const project = projects.splice(id, 1)

  return response.json(project)
})

app.listen(3333, () => {
  console.log('Funcionando 100% 🚀')
})