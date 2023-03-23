import { Router, json } from "express"
import cors from "cors"
import routerTarefas from "./tarefa.routes"

const router = Router()

router.use(cors()) /*Compartilhamento de recursos com origens diferentes*/
router.use(json()) /*É um formato baseado em texto padrão para representar 
                    dados estruturados com base na sintaxe do objeto JavaScript.*/
router.use("/tarefa", routerTarefas)

export default router