let info = document.querySelector('.information')

let inArr = []

class Info{
    constructor(image, stat, text ){
        this.image = image
        this.stat = stat
        this.text = text
    }
    tohtml(){
        return `<div class="info">
                        <img src="${this.image}" class="info__img">
                        <h1 class="info__stat">${this.stat}</h1>
                        <p class="info__text">${this.text}</p>
                    </div>`
    }
}

inArr.push(new Info("images/weImg1.png", "350+", "Студентов"))
inArr.push(new Info("images/weImg2.png", "80+", "Волонтёров"))
inArr.push(new Info("images/weImg3.png", "11+", "Стран"))
inArr.push(new Info("images/weImg4.png", "8", "Месяцев программы"))

for( i = 0 ; i < inArr.length ; i++){
    info.innerHTML += inArr[i].tohtml()
}






let offer = document.querySelector('.offers')

let offArr = []

class Offer{
    constructor(image, sub, desc ){
        this.image = image
        this.sub = sub
        this.desc = desc
    }
    tohtml(){
        return `<div class="offer">
                    <img src="${this.image}" class="offer__img">
                    <h3 class="offer__sub">${this.sub}</h3>
                    <p class="offer__desc">${this.desc}</p>
                </div>`
    }
}

offArr.push(new Offer("images/math.png", "SAT Math", "Подготовка к SAT"))
offArr.push(new Offer("images/weImg4.png", "Математика", "Олимпиадная математика"))
offArr.push(new Offer("images/physics.png", "Физика", "Олимпиадная физика"))
offArr.push(new Offer("images/chem.png", "Химия", "Олимпиадная химия"))
offArr.push(new Offer("images/bio.png", "Биология", "Олимпиадная биология"))
offArr.push(new Offer("images/weImg3.png", "IT", "Информатика и программирование"))


for( i = 0 ; i < offArr.length ; i++){
    offer.innerHTML += offArr[i].tohtml()
}

let reasons = document.querySelector('.reasons')

let reArr = []

class Reason{
    constructor(text, desc){
        this.text = text
        this.desc = desc
    }
    tohtml(){
        return`<div class="reason">
                    <h3 class="reason__text">${this.text}</h3>
                    <p class="reason__descr">${this.desc}</p>
                </div>`
    }
}

reArr.push(new Reason("Международная команда", "Волонтёры и менторы из лучших университетов 11+ стран"))
reArr.push(new Reason("Бесплатное обучение", "Все программы полностью бесплатны для учеников"))
reArr.push(new Reason("Индивидуальный подход", "Маленькие группы и персональное внимание к каждому студенту"))
reArr.push(new Reason("Практика и результат", "Фокус на практических навыках и реальных достижениях"))

for( i = 0 ; i < reArr.length ; i++){
    reasons.innerHTML += reArr[i].tohtml()
}


const header = document.querySelector('header')
const headerText = document.querySelectorAll('.navigation')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})


const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});





