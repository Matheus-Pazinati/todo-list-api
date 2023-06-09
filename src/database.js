import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

export class Database {
  #database = {}

  constructor() {
    fs.readFile(databasePath, 'utf-8')
    .then((data) => {
      this.#database = JSON.parse(data)
    })
    .catch(() => {
      this.#persist()
    })
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  hasTask(table, id) {
    return this.#database[table].some((task) => task.id === id)
  }

  select(table) {
    const data = this.#database[table] ?? []
    return data
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist()

    return data
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)
    
    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1)
      this.#persist()
    }
  }

  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if (rowIndex > -1) {
      const { title, description } = data
      const updatedTask = this.#database[table][rowIndex]

      if (title) {
        updatedTask.title = title
      }
      if (description) {
        updatedTask.description = description
      }
      updatedTask.updated_at = new Date()

      this.#persist()
    }
  }

  complete(table, id) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if (rowIndex > -1) {
      const selectedTask = this.#database[table][rowIndex]
      if (selectedTask.completed_at === null) {
        selectedTask.completed_at = new Date()
      } else {
        selectedTask.completed_at = null
      }
    }
  }
}