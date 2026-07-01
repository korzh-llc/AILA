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

advArr.push(new Adv("images/weImg1.png", "Access to Students", "Connect with talented students from 11+ countries worldwide"))
advArr.push(new Adv("images/weImg3.png", "Global Network", "Become a part of an international educational community"))
advArr.push(new Adv("images/adv.png", "Joint Events", "Organize webinars, workshops, and conferences together with us"))
advArr.push(new Adv("images/adv2.png", "Collaborations", "Develop joint educational projects and initiatives"))

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

forArr.push(new Format("images/part3.png", "Schools and Learning Centers", "Integration of AILA Academy programs into your institution's curriculum"))
forArr.push(new Format("images/part2.png", "Joint Events", "Hackathons, olympiads, workshops, and educational festivals"))
forArr.push(new Format("images/part1.png", "Pilot Programs", "Launching new educational initiatives together with partners"))

for( i = 0 ; i < forArr.length ; i++){
    format.innerHTML += forArr[i].tohtml()
}

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});