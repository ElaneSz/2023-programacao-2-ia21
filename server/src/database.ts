import sqlite3 from 'sqlite3'
import { Database, open } from 'sqlite'

let _db: Database<any> | null = null /*O '_db' recebe este apelido ou ele é nulo*/

export default async function() { 
  if (_db) /*IF para caso o '_db' não seja nulo*/
    return _db as Database<any> 

  const db = await open({ /*Para caso o '_db' seja nulo, ocorre a conexão pela 1º vez | O BD tem o nome de 'bd'*/
    filename: './database.sqlite',
    driver: sqlite3.Database /*Conexão real com o BD*/
  })

  await db.exec(`
    CREATE TABLE IF NOT EXISTS todo (
      id    INTEGER PRIMARY KEY AUTOINCREMENT,
      texto TEXT    NOT NULL,
      done  BOOLEAN DEFAULT FALSE
    )
  `)

  _db = db /*O 'db' é passado para o '_db'*/

  return _db
}