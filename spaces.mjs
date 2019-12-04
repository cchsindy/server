import { SpacesService } from 'services'

const spaces = new SpacesService
spaces.getFileList('library-tv')
  .then(list => {
    console.log(list)
  })
