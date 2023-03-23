import express from "express"

const PORT = 3000
const app = express()

app.get("/tarefa", (req, res) => res.send("#Buscar dados de todas as tarefas"))
app.get("/tarefa/:id", (req, res) => res.send("#Buscar dados de uma tarefa"))
app.post("/tarefa", (req, res) => res.send("#inserir uma tarefa"))
app.put("/tarefa", (req, res) => res.send("#Alterar todos os dados de uma tarefa"))
app.patch("/tarefa", (req, res) => res.send("#Alterar dados especificos de uma tarefa"))
app.delete("/tarefa", (req, res) => res.send("#Deletar tarefa especifica"))

app.get("/", (req, res) => res.send("Hello word"))

app.listen(8080, () => console.log(`server is running, on port ${PORT}`))

/*JSON
XML
API
HTTP
RPC
SOAP

REST | 
RESTful
GraphQL*/