let celciusInput = document.querySelector('#celcius > Input')
let fahrenheitInput = document.querySelector('#fahrenheit > Input')
let kelvinInput = document.querySelector('#kelvin > Input')

let btn = document.querySelector('.button button')

function roundNumber(number){
      return Math.round(number*100)/100
    }


/* Celcius to Fahrenheit  and Kelvin */
celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value) 
    let fTemp = (cTemp*(9/5)) + 32 
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp) 
    kelvinInput.value = roundNumber(kTemp)
})


/* Fahrenheit to Celcius and Kelvin */
fahrenheitInput.addEventListener('input', function(){
        let fTemp = parseFloat(fahrenheitInput.value)
        let cTemp = (fTemp - 32) * (5/9)
        let kTemp = fTemp - 32 * (5/9) + 273.15

        celciusInput.value = roundNumber(cTemp)
         kelvinInput.value = roundNumber(kTemp)
        })

/* Kelving to Celcius and Fahrenheit */
kelvinInput.addEventListener('input', function(){
     let kTemp = parseFloat(kelvinInput.value)
     let cTemp = kTemp - 273.15
     let fTemp = (kTemp - 273.15) * 9/5 + 32

     celciusInput.value = roundNumber(cTemp)
     fahrenheitInput.value = roundNumber(fTemp)
    })


     btn.addEventListener('click', ()=>{
     celciusInput.value = ""
     fahrenheitInput.value = ""
      kelvinInput.value = ""
    })