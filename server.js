const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {
  res.send('This is Aces hub Systems')
})

app.post('*', (req, res) => {
  let {sessionId, serviceCode, phoneNumber, text} = req.body
  if (text == '') {
    // This is the first request. Note how we start the response with CON
    let response = `CON Welcome to Aces Transport Services, Please Select Your Destination
    1. Accra
    2. Kumasi
    3. Tamale`
    res.send(response)
  } else if (text == '1') {
    // Business logic for first level response
    let response = `CON Choose Prefered Vehicle
    1. VIP Bus
    2. Sprinter Benz Bus
    3. Toyota Hiace`
    res.send(response)
  } else if (text == '2') {
    // Business logic for first level response
    let response = `END Your phone number is ${phoneNumber}`
    res.send(response)
  } else if (text == '1*1') {
    // Business logic for first level response
    let accountNumber = 'ACC1001'
    // This is a terminal request. Note how we start the response with END
    let response = `END Your account number is ${accountNumber}`
    res.send(response)
  } else if (text == '1*2') {
    // This is a second level response where the user selected 1 in the first instance
    let balance = 'NGN 10,000'
    // This is a terminal request. Note how we start the response with END
    let response = `END Your balance is ${balance}`
    res.send(response)
  } else {
    res.status(400).send('Bad request!')
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})