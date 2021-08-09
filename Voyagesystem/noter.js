const express = require('express')
const app = express()
const port = 3000
 
app.get('/eksempel', function (req, res) {
  res.send(
{
  _id: "60a694ee2e13494ffc70dd51",
  imo: 9729362,
  name: "WDS Penelope",
  description: "Looks very cool!",
  image: "https://i.imgur.com/SjFnz17.png",
  voyages: [
    ObjectID('1234'),
    ObjectID('1235')
  ],
  destinations: [
    {
      port: 'Port of Houston',
      city: 'Houston',
      cc: 'USA'
    },
    {
      port: 'Port of Beaumont',
      city: 'Beaumont',
      cc: 'USA'
    }
  ]
}
  )
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


