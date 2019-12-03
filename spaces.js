const https = require('https')
const convert = require('xml-js')

https.get('https://covenant.nyc3.digitaloceanspaces.com/', (res) => {
  let body = ''
  res.on('data', (chunk) => {
    body += chunk
  })
  res.on('end', () => {
    //console.log(body)
    const files = Array.from(body.matchAll(RegExp('library-tv/[^<]*\.jpg', 'g')), m => m[0])
    // const files = []
    // const data = convert.xml2js(body)
    // for (const e of data.elements[0].elements) {
    //   for (const key in e) {
    //     if (e.hasOwnProperty(key)) {
    //       const element = e[key]
    //       if (element[0].elements) {
    //         if (element[0].elements[0].text.includes('library-tv') && element[0].elements[0].text.length > 11) {
    //           files.push(element[0].elements[0].text.substring(11))
    //         }
    //       }
    //     }
    //   }
    // }
    console.log(files)
  })
}).on('error', (e) => {
  console.error(e)
})