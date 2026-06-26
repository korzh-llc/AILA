let adv = document.querySelector('.adv__cards')

let advArr = []

class Adv{
    constructor(image, text, descr ){
        this.image = image
        this.text = text
        this.descr = descr
    }
    tohtml(){
        return `<div class="adv__card">
                    <img src="${this.image}" class="adv__card__img">
                    <div class="adv__card__texts">
                        <h3 class="adv__card__text">${this.text}</h3>
                        <p class="adv__card__descr">${this.descr}</p>
                    </div>
                </div>`
    }
}

advArr.push(new Adv("images/weImg1.png", "Доступ к студентам", "Свяжитесь с талантливыми учениками из 11+ стран мира"))
advArr.push(new Adv("images/weImg3.png", "Глобальная сеть", "Станьте частью международного образовательного сообщества"))
advArr.push(new Adv("images/adv.png", "Совместные мероприятия", "Организуйте вебинары, воркшопы и конференции вместе с нами"))
advArr.push(new Adv("images/adv2.png", "Коллаборации", "Разрабатывайте совместные образовательные проекты"))


for( i = 0 ; i < advArr.length ; i++){
    adv.innerHTML += advArr[i].tohtml()
}


let format = document.querySelector('.formats')

let forArr = []

class Format{
    constructor(image, name, descr ){
        this.image = image
        this.name = name
        this.descr = descr
    }
    tohtml(){
        return `<div class="format">
                    <img src="${this.image}" class="format__img">
                    <h3 class="format__name">${this.name}</h3>
                    <p class="format__descr">${this.descr}</p>
                </div>`
    }
}

forArr.push(new Format("images/part3.png", "Школы и учебные центры", "Интеграция программ AILA Academy в учебный процесс вашего заведения"))
forArr.push(new Format("images/part2.png", "Совместные мероприятия", "Хакатоны, олимпиады, мастер-классы и образовательные фестивали"))
forArr.push(new Format("images/part1.png", "Пилотные программы", "Запуск новых образовательных инициатив совместно с партнёрами"))


for( i = 0 ; i < forArr.length ; i++){
    format.innerHTML += forArr[i].tohtml()
}

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});