import express from 'express'
import { FirestoreService, SpacesService } from 'services'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => res.send('Covenant Education'))
app.get('/announcements-tv', (req, res) =>
  res.sendFile('/Users/bradspencer/Dev/Node/server/announcements-tv.html')
)
app.get('/closet-data', (req, res) =>
  // res.sendFile('/Users/bradspencer/Dev/Node/server/closet-data.html')
  res.sendFile('/home/brad/server/closet-data.html')
)
app.get('/everyday-tv', (req, res) =>
  res.sendFile('/Users/bradspencer/Dev/Node/server/everyday-tv.html')
)
app.get('/library-tv', (req, res) =>
  res.sendFile('/home/brad/server/library-tv.html')
)
app.get('/taylor-tv', (req, res) =>
  res.sendFile('/home/brad/server/taylor-tv.html')
)
app.post('/firestore', (req, res) => {
  const fs = new FirestoreService()
  switch (req.body.method) {
    case 'get-announcements':
      fs.getAnnouncements().then((list) => {
        res.json(list)
      })
      break
    case 'get-closet-data':
      fs.getClosetData().then((list) => {
        res.json(list)
      })
      break
  }
})
app.post('/spaces', (req, res) => {
  const spaces = new SpacesService()
  spaces.getFileList(req.body.directory).then((list) => {
    res.json(list)
  })
})

app.listen(port, () => console.log(`Server listening on port ${port}...`))
