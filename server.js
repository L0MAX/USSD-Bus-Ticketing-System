const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3000

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
    let response = `CON Welcome to Aces Transport Services Ho Terminal. \nPlease Select Your Destination
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
    1. Transit (Ho-Sogakofe-Accra) @ GHC 30
    2  Direct  (Ho-Accra) @ GHC 24`
    res.send(response)
  }else if (text == '1*2') {
        let response = `CON Choose Your Sprinter Package
        1. Transit (Ho-Sogakofe-Accra) @ GHC 28
        2  Direct  (Ho-Accra) @ GHC 23`
        res.send(response)
  }else if (text == '1*3') {
        let response = `CON Choose Your Toyota Hiace Package
        1. Transit (Ho-Sogakofe-Accra) @ GHC 26
        2  Direct  (Ho-Accra) @ GHC 22`
        res.send(response)

              }else if (text == '2*1') {
              //Level 2 for Kumasi
                let response = `CON Choose Your VIP Bus Package
                1. Transit (Ho-Accra-Kumasi) @ GHC 70
                2  Direct  (Ho-Accra) @ GHC 58`
                res.send(response)
              }else if (text == '2*2') {
                let response = `CON Choose Your Sprinter Package
                1. Transit (Ho-Accra-Kumasi) @ GHC 60
                2  Direct  (Ho-Accra) @ GHC 50`
                res.send(response)
              }else if (text == '2*3') {
                let response = `CON Choose Your Toyota Hiace Package
                1. Transit (Ho-Accra-Kumasi) @ GHC 63
                2  Direct  (Ho-Accra) @ GHC 51`
                res.send(response)}else if (text == '3*1') {
   //Level 2 for Tamale      
    let response = `CON Choose Your VIP Bus Package
    1. Direct (Ho-Tamale) @ GHC 120`
    res.send(response)
  }else if (text == '3*2') {
    let response = `CON Choose Your Sprinter Package
    1. Direct (Ho-Tamale) @ GHC 130`
    res.send(response)
  }else if (text == '3*3') {
    let response = `CON Choose Your Toyota Hiace Package
    1. Transit (Ho-Tamale) @ GHC 140`
    res.send(response)
          }else if (text == '1*1*1') {
            //Level 3 for Accra VIP Bus
            let response = `END You have chosen VIP Bus Transit to Accra @ GHC 30 \n
            You will receive a prompt shortly to confirm your purchase. \n
             Thank you for doing business with us. \n Aces, the giants in transport services`
            res.send(response)
          }else if (text == '1*1*2') {
            let response = `END You have chosen VIP Bus Direct to Accra @ GHC 24. 
            \n You will receive a prompt shortly to confirm your purchase. 
            \n Thank you for doing business with us. \n Aces, the giants in transport services`
            res.send(response)
          }else if (text == '1*2*1') {
              //Level 3 for Accra Sprinter
              let response = `END You have chosen Sprinter Transit to Accra @ GHC 28. \n 
              You will receive a prompt shortly to confirm your purchase. \n 
              Thank you for doing business with us. \n Aces, the giants in transport services`
              res.send(response)
            }else if (text == '1*2*2') {
              let response = `END You have chosen Sprinter Direct to Accra @ GHC 23. \n 
              You will receive a prompt shortly to confirm your purchase. \n 
              Thank you for doing business with us. \n Aces, the giants in transport services`
              res.send(response)
            }else if (text == '1*3*1') {
                //Level 3 for Accra Toyota Hiace
                    let response = `END You have chosen Toyota Hiace Transit to Accra @ GHC 26. 
                    \nYou will receive a prompt shortly to confirm your purchase. \n 
                    Thank you for doing business with us. \n Aces, the giants in transport services`
                    res.send(response)
            }else if (text == '1*3*2') {
              let response = `END You have chosen Toyota Hiace Direct to Accra @ GHC 22. 
              \n You will receive a prompt shortly to confirm your purchase. \n 
              Thank you for doing business with us. \n Aces, the giants in transport services`
              res.send(response)
              }else if (text == '2*1*1') {
              //level 3 for Kumasi VIP bus
                    let response = `END You have chosen VIP Bus Transit to Kumasi @ GHC 70. 
                    \n You will receive a prompt shortly to confirm your purchase. 
                    \n Thank you for doing business with us. \n Aces, the giants in transport services`
                    res.send(response)
              }else if (text == '2*1*2') {
                    let response = `END You have chosen VIP Bus Direct to Kumasi @ GHC 58. 
                    \n You will receive a prompt shortly to confirm your purchase. 
                    \n Thank you for doing business with us. \n Aces, the giants in transport services`
                    res.send(response)
              }else if (text == '2*2*1') {
              //level 3 for Kumasi Sprinter
                    let response = `END You have chosen Sprinter Transit to Kumasi @ GHC 60. 
                    \n You will receive a prompt shortly to confirm your purchase. \n 
                    Thank you for doing business with us. \n Aces, the giants in transport services`
                    res.send(response)
              }else if (text == '2*2*2') {
                    let response = `END You have chosen Sprinter Direct to Kumasi @ GHC 50. 
                    \n You will receive a prompt shortly to confirm your purchase. \n 
                    Thank you for doing business with us. \n Aces, the giants in transport services`
                    res.send(response)
              }else if (text == '2*3*1') {
              //level 3 for Kumasi Toyota Hiace
                    let response = `END You have chosen Toyota Hiace Transit to Kumasi @ GHC 63. 
                    \n You will receive a prompt shortly to confirm your purchase. \n 
                    Thank you for doing business with us. \n Aces, the giants in transport services`
                    res.send(response)
              }else if (text == '2*3*2') {
                    let response = `END You have chosen Toyota Hiace Direct to Kumasi @ GHC 51. 
                    \n You will receive a prompt shortly to confirm your purchase. \n 
                    Thank you for doing business with us. \n Aces, the giants in transport services`
                    res.send(response)

                  }else if (text == '3*1*1') {
                    //level 3 for Tamale VIP bus
                          let response = `END You have chosen VIP Bus Direct to Tamale @ GHC 120. \n
                          You will receive a prompt shortly to confirm your purchase. \n Thank you for doing business with us.
                           \n Aces, the giants in transport services`
                          res.send(response)
                    }else if (text == '3*2*1') {
                    //level 3 for Tamale Sprinter
                          let response = `END You have chosen Sprinter Direct to Tamale @ GHC 130. \n
                          You will receive a prompt shortly to confirm your purchase. \n
                           Thank you for doing business with us. \n Aces, the giants in transport services`
                          res.send(response)
                    }else if (text == '3*3*1') {
                    //level 3 for Tamale Toyota Hiace
                          let response = `END You have chosen Toyota Hiace Direct to Tamale @ GHC 140. \n
                           You will receive a prompt shortly to confirm your purchase. \n 
                           Thank you for doing business with us. \n Aces, the giants in transport services`
                          res.send(response)
                    } else if (text == '3*3*1*1') {
    // This is a terminal request. Note how we start the response with END
     let response = `END You will receive a prompt shortly to confirm your purchase. \n Thank you for doing business with us. \n Aces, the giants in transport services`
    res.send(response)
  } else {
    res.status(400).send('Bad request!')
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})