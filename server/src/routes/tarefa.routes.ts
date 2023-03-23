import { Router } from "express"
import database from "../database"

const router = Router()

router.get("/", async (req, res) => { /*Rota para listar tudo ||*/
  console.log("READED ITENS")
  const db = await database()
  const result = await db.all('SELECT * FROM todo')
  res.json(result)
})

router.get("/:id", async (req, res) => { /*Rota para listar dado especifico ||*/
  console.log("READED ITEN")
  const db = await database()
  const result = await db.all('SELECT * FROM todo WHERE id=?', [req.params.id]) /*Pega da URL*/
  res.json(result)
})

router.post("/", async (req, res) => { /*Rota para inserir ||*/
  console.log("CREATED NEW ITEM")
  const db = await database()
  const result = await db.run('INSERT INTO todo(texto) VALUES(?)', [req.body.texto])
  res.json({ id: result.lastID })
})

router.put("/:id", async(req, res) => { /*Rota para Alterar todos*/
  console.log("PUT ITENS")
  const db = await database()
  const result = await db.all('UPDATE todo SET texto=?, done=? WHERE id=?', [req.body.texto, req.body.done, req. params.id])
  res.json(result)
})

router.patch("/:id", async(req, res) => { /*Rota para alterar dados especificos*/
  console.log("PATCH ITEN")
  const db = await database()
  const result = await db.all('UPDATE todo SET done=? WHERE id=?', [req.body.done, req.params.id])
  res.json(result)
})

router.delete("/:id", async(req, res) => { /*Rota para excluir uma tarefa*/
  console.log("DELETE ITENS")
  const db = await database()
  const result = await db.all('DELETE FROM todo WHERE id=?', [req.params.id])
  res.json(result)
})

export default router