import express from 'express'
import { FirestoreService, SpacesService } from 'services'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => res.send('Covenant Education'))
app.get('/library-tv', (req, res) => res.sendFile('/home/brad/server/library-tv.html'))
app.get('/taylor-tv', (req, res) => res.sendFile('/home/brad/server/taylor-tv.html'))
app.post('/firestore', (req, res) => {
  const fs = new FirestoreService
  fs.getAnnouncements()
    .then(list => {
      res.json(list)
    })
})
app.post('/spaces', (req, res) => {
  const spaces = new SpacesService
  spaces.getFileList(req.body.directory)
  .then(list => {
    res.json(list)
  })
})

app.listen(port, () => console.log(`Server listening on port ${port}...`))
