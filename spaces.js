const https = require('https')

https.get('https://covenant.nyc3.digitaloceanspaces.com/', (res) => {
  let body = ''
  res.on('data', (chunk) => {
    body += chunk
  })
  res.on('end', () => {
    const files = Array.from(body.matchAll(RegExp('library-tv/[^<]*\.jpg', 'g')), m => m[0])
    console.log(files)
  })
}).on('error', (e) => {
  console.error(e)
})