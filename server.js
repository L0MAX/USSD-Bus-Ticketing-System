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
    // This is the first request.
    let response = `CON Welcome to Aces Transport Services Ho Terminal, Please Select Your Destination
    1. Accra
    2. Kumasi
    3. Tamale`
    res.send(response)
  } else if (text == '1') {
    // Business logic for first level response
    let response = `CON Choose Your Prefered Vehicle To Accra
    1. VIP Bus
    2. Sprinter
    3. Toyota Hiace`
    res.send(response)
  } else if (text == '2') {
    let response = `CON Choose Your Prefered Vehicle To Kumasi
    1. VIP Bus
    2. Sprinter
    3. Toyota Hiace`
    res.send(response)
  } else if (text == '3') {
    let response = `CON Choose Your Prefered Vehicle To Tamale
    1. VIP Bus
    2. Sprinter
    3. Toyota Hiace`
    res.send(response)
  }else if (text == '1*1') {
    //Level 2 for Accra
    let response = `CON Choose Your VIP Bus Package
    1. Transit (Ho-Sogakofe-Accra) GHC 30
    2  Direct  (Ho-Accra)          GHC 24`
    res.send(response)
  }else if (text == '1*2') {
        let response = `CON Choose Your Sprinter Package
        1. Transit (Ho-Sogakofe-Accra) GHC 28
        2  Direct  (Ho-Accra)          GHC 23`
        res.send(response)
  }else if (text == '1*3') {
            let response = `CON Choose Your Toyota Hiace Package
            1. Transit (Ho-Sogakofe-Accra) GHC 26
            2  Direct  (Ho-Accra)          GHC 22`
            res.send(response)
 }else if (text == '2*1') {
   //Level 2 for Kumasi
                let response = `CON Choose Your VIP Bus Package
                1. Transit (Ho-Accra-Kumasi) GHC 70
                2  Direct  (Ho-Accra)          GHC 58`
                res.send(response)
              }else if (text == '2*2') {
                    let response = `CON Choose Your Sprinter Package
                    1. Transit (Ho-Accra-Kumasi) GHC 60
                    2  Direct  (Ho-Accra)          GHC 50`
                    res.send(response)
              }else if (text == '2*3') {
                        let response = `CON Choose Your Toyota Hiace Package
                        1. Transit (Ho-Accra-Kumasi) GHC 63
                        2  Direct  (Ho-Accra)          GHC 51`
                        res.send(response)}else if (text == '3*1') {
   //Level 2 for Tamale      
                            let response = `CON Choose Your VIP Bus Package
                            1. Direct (Ho-Tamale) GHC 120`
                            res.send(response)
                          }else if (text == '3*2') {
                                let response = `CON Choose Your Sprinter Package
                                1. Transit (Ho-Tamale) GHC 130`
                                res.send(response)
                          }else if (text == '3*3') {
                                    let response = `CON Choose Your Toyota Hiace Package
                                    1. Transit (Ho-Tamale) GHC 140`
                                    res.send(response)
  }else if (text == '1*1*1') {
    //Level 3 for Accra VIP Bus
        let response = `CON You have chosen VIP Bus Transit GHC 30. Enter Mobile Money Wallet Number`
        res.send(response)
      }else if (text == '1*1*2') {
        let response = `CON You have chosen VIP Bus Direct GHC 24. Enter Mobile Money Wallet Number`
        res.send(response)
      }else if (text == '1*2*1') {
          //Level 3 for Accra Sprinter
              let response = `CON You have chosen Sprinter Transit GHC 28. Enter Mobile Money Wallet Number`
              res.send(response)
            }else if (text == '1*2*2') {
              let response = `CON You have chosen Sprinter Direct GHC 23. Enter Mobile Money Wallet Number`
              res.send(response)
            }else if (text == '1*3*1') {
                //Level 3 for Accra Toyota Hiace
                    let response = `CON You have chosen Toyota Hiace Transit GHC 26. Enter Mobile Money Wallet Number`
                    res.send(response)
            }else if (text == '1*3*2') {
              let response = `CON You have chosen Toyota Hiace Direct GHC 22. Enter Mobile Money Wallet Number`
              res.send(response)
      }else if (text == '2*1*1') {
          // Business logic for first level response
          let response = `CON Enter Mobile Money Wallet Number`
          // let response = `END Your account number is ${accountNumber}`
          res.send(response)
        }else if (text == '2*1*2') {
          // Business logic for first level response
          let response = `CON Enter Mobile Money Wallet Number`
          // let response = `END Your account number is ${accountNumber}`
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