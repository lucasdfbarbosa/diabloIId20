const USER_NAME = 'admin'
const PASSWORD = 'Diablod20'
const DB_NAME = 'diablod20-dev'

export const MONGODB_URI = `mongodb+srv://${USER_NAME}:${PASSWORD}@lucasbarbosa.elvo9.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

export const PORT = process.env.PORT || 8080