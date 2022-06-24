'use strict'

window.addEventListener('load', function () {
  document.querySelector('.logo').style = 'opacity: 1'
})

let btn1 = document.querySelector('.btn1')
let flag1 = document.querySelector('.countFlag1')
let countryName1 = document.querySelector('.countryName1')
let continet1 = document.querySelector('.continent1')
let population1 = document.querySelector('.population1')
let language1 = document.querySelector('.language1')
let currecny1 = document.querySelector('.currency1')
let inputField1 = document.querySelector('.in1')
let animationLoad1 = document.querySelector('.loadingAnimation1')





//Promise, Fetch, AJAX Calls Version



let appEngine = function () {
  if (inputField1.value) {

    document.querySelector('.inside1').innerHTML = `<center> <img src="img-4.jpg" class="countFlag" width="300" height="220"></center>
    <hr style="color: rgb(107, 99, 99); width:30%; margin-top: 10px;">
    <div class="loadingAnimation1">
    ⚫</div>`

    let fetch1 = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputField1.value}`)

    fetch1.then(function (response) {
      return response.json()
    }).then(function (data) {
      let data1 = data[0]

      document.querySelector('.inside1').innerHTML = `<center>
        <img src="img-4.jpg" class="countFlag" width="300" height="220">
        </center>
        <hr style="color: rgb(107, 99, 99); width:30%; margin-top: 10px;">
        <div class="loadingAnimation1 hide">
        ⚫
        </div>
        <h3 class="countryName1" style="padding-left: 15px">${data1.word.toUpperCase()}</h3>
        <p class="continent1" style="padding-left: 15px">Synonyms: ${data1.meanings[0].synonyms[0]} | ${data1.meanings[0].synonyms[1]} </p>
        <p class="population1" style="padding-left: 15px">
        📁 &nbsp; <a href="${data1.sourceUrls[0]}">Source</a>
        </p>
        <p class="language1" style="padding-left: 15px">
        📢 &nbsp; English
        </p>
        <p class="currency1" style="padding-left: 15px">
        ➡️ &nbsp; ${data1.meanings[0].definitions[2].definition.trim()}
        </p>`

    }).catch(function (e) {
      document.querySelector('.inside1').innerHTML = `<center> <img src="img-4.jpg" class="countFlag" width="300" height="220">
      </center>
      <hr style="color: rgb(107, 99, 99); width:30%; margin-top: 10px;">
      <p>Cannot Find Word...</p>`
      setTimeout(function () {
        document.querySelector('.inside1').innerHTML = `<center> <img src="img-4.jpg" class="countFlag" width="300" height="220">
        </center>
        <hr style="color: rgb(107, 99, 99); width:30%; margin-top: 10px;">`
      }, 3000)
    })

  }
  else {
    document.querySelector('.inside1').innerHTML = `<center> <img src="img-4.jpg" class="countFlag" width="300" height="220">
      </center>
      <hr style="color: rgb(107, 99, 99); width:30%; margin-top: 10px;">
      <p>Invalid Input...</p>`
    setTimeout(function () {
      document.querySelector('.inside1').innerHTML = `<center> <img src="img-4.jpg" class="countFlag" width="300" height="220">
        </center>
        <hr style="color: rgb(107, 99, 99); width:30%; margin-top: 10px;">`}, 3000)
  }
}


btn1.addEventListener('click', appEngine)

document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') appEngine()
})















//XMLHTTPREQUEST VERSION


// btn1.addEventListener('click', function () {

//   if (inputField1.value) {

//     document.querySelector('.inside1').innerHTML = `<center>
//     <img src="Untitled design.png" class="countFlag" width="300" height="220"></center>

//     <hr style="color: rgb(107, 99, 99); width:30%; margin-top: 10px;">

//     <div class="loadingAnimation1">
//     ⚫
//     </div>`

//     let dictionary = new XMLHttpRequest()

//     dictionary.open('GET', `https://api.dictionaryapi.dev/api/v2/entries/en/${inputField1.value}`)

//     dictionary.send()

//     dictionary.addEventListener('load', function () {

//       let data1 = JSON.parse(dictionary.responseText)[0]

//       document.querySelector('.inside1').innerHTML = `<center>
//         <img src="Untitled design.png" class="countFlag" width="300" height="220">
//         </center>

//         <hr style="color: rgb(107, 99, 99); width:30%; margin-top: 10px;">

//         <div class="loadingAnimation1 hide">
//         ⚫
//         </div>

//         <h3 class="countryName1" style="padding-left: 15px">${data1.word.toUpperCase()}</h3>
//         <p class="continent1" style="padding-left: 15px">Synonyms: ${data1.meanings[0].synonyms[0]} | ${data1.meanings[0].synonyms[1]} </p>

//         <p class="population1" style="padding-left: 15px">
//         📁 &nbsp; <a href="${data1.sourceUrls[0]}">Source</a>
//         </p>

//         <p class="language1" style="padding-left: 15px">
//         📢 &nbsp; English
//         </p>

//         <p class="currency1" style="padding-left: 15px">
//         ➡️ &nbsp; ${data1.meanings[0].definitions[2].definition.trim()}
//         </p>`

//     })
//   }
//   else {
//     alert('Invalid Input')
//   }
// })