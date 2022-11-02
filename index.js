const sentenceDiv = document.querySelector(".sentence")
const btn = document.querySelector("button")
const posDiv = document.querySelector(".random-pos")

const sentences = [
  "Чурка",
  "Лысая сиська",
  "Баребух",
  "Тряпка",
  "Или лутший Друг?!?!",
  "Все таки еврей",
  "Преданный предатель",
  "А может Братищка",
  "Красавчик",
  "Дед",
  "Четкий парень",
  "Мисс Москва",
  "Нытик",
]

let newArr = [...sentences]

btn.addEventListener("click", () => {
  let randomIndex
  if (newArr.length) {
    randomIndex = Math.floor(Math.random() * newArr.length)
    sentenceDiv.innerHTML = newArr[randomIndex]
    newArr.splice(randomIndex, 1)
  } else {
    newArr = [...sentences]
    randomIndex = Math.floor(Math.random() * newArr.length)
    sentenceDiv.innerHTML = newArr[randomIndex]
    newArr.splice(randomIndex, 1)
  }
  sentenceDiv.classList.add("anim")
  setTimeout(() => sentenceDiv.classList.remove("anim"), 500)

  let i = Math.floor(Math.random() * 200) + 1
  let j = Math.floor(Math.random() * 200) + 1
  posDiv.style.left = i + "px"
  posDiv.style.top = j + "px"
})
