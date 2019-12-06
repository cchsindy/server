import express from 'express'
import { SpacesService } from 'services'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.get('/', (req, res) => res.send('Covenant Education'))
app.get('/library-tv', (req, res) => res.sendFile('/home/brad/server/library-tv.html'))
app.post('/spaces', (req, res) => {
  const spaces = new SpacesService
  spaces.getFileList(req.params.directory)
  .then(list => {
    res.json(list)
  })
})

app.listen(port, () => console.log(`Server listening on port ${port}...`))
