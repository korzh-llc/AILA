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

inArr.push(new Info("images/weImg1.png", "600+", "Students"))
inArr.push(new Info("images/weImg2.png", "150+", "Volunteers"))
inArr.push(new Info("images/weImg3.png", "13+", "Countries"))
inArr.push(new Info("images/weImg4.png", "8", "Months of the program"))

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

offArr.push(new Offer("images/math.png", "SAT Verbal & Math", "Preparation for the SAT"))
offArr.push(new Offer("images/math.png", "IELTS", "Preparation for the IELTS"))
offArr.push(new Offer("images/weImg4.png", "Math", "Olympiad Math"))
offArr.push(new Offer("images/physics.png", "Physics", "Olympiad Physics"))
offArr.push(new Offer("images/chem.png", "Chemistry", "Olympiad Chemistry"))
offArr.push(new Offer("images/bio.png", "Biology", "Olympiad Biology"))
offArr.push(new Offer("images/weImg3.png", "Python", "Python programming"))
offArr.push(new Offer("images/weImg3.png", "Economics + Finance", "Base of economics"))
offArr.push(new Offer("images/weImg3.png", "ML", "Machine Learning in tech"))
offArr.push(new Offer("images/weImg3.png", "Project building", "an organized, temporary endeavor"))

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

reArr.push(new Reason("International Team", "Volunteers and mentors from top universities across 11+ countries"))
reArr.push(new Reason("Free Education", "All programs are completely free for students"))
reArr.push(new Reason("Individual Approach", "Small groups and personalized attention for every student"))
reArr.push(new Reason("Practice and Results", "Focus on practical skills and real achievements"))

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





