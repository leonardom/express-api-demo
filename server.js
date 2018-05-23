const app = require('./src/app')
const port =  process.env.PORT || 3000

let server = app.listen(port, () => {
  let host = server.address().address
  let port = server.address().port
  console.log("Beers app listening at http://%s:%s", host, port)
})