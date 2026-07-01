const pages = document.querySelectorAll(".page");
const steps = document.querySelectorAll(".step");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let current = 0;

function updateForm() {


    pages.forEach(page =>
        page.classList.remove("active")
    );

    steps.forEach(step =>
        step.classList.remove("active")
    );

    pages[current].classList.add("active");

    for(let i = 0; i <= current; i++){
        steps[i].classList.add("active");
    }
    if (current === pages.length - 1) {
    nextBtn.textContent = "Отправить";
    } else {
    nextBtn.textContent = "Далее >";
}
};

prevBtn.addEventListener("click", () => {
    if(current > 0){
        current--;
        updateForm();
    }
});

updateForm();

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});




nextBtn.addEventListener("click", () => {

    if (current < pages.length - 1) {
        current++;
        updateForm();
    } else {

        nextBtn.disabled = true;
        nextBtn.textContent = "Отправлено ✓";
    }


    const data = {
    fullname: document.querySelector('[name="fullname"]').value,
    phone: document.querySelector('[name="phone"]').value,
    email: document.querySelector('[name="email"]').value,

    exp: document.querySelector('input[name="exp"]:checked').value,
    skill: document.querySelector('input[name="skill"]:checked').value,
    workHours: document.querySelector('input[name="workHours"]:checked').value
}
    
        const formData = new FormData();
        formData.append("fullname", data.fullname);
        formData.append("phone", data.phone);
        formData.append("email", data.email);
        formData.append("exp", data.exp);
        formData.append("skill", data.skill);
        formData.append("workHours", data.workHours);
    
    fetch("https://script.google.com/macros/s/AKfycbwPP2vJ-J7_1fyG2T1YoCuhtxcwIdaRvhSNmzvar-1ssbrePdK1Fm1C6Nie2DURt2bS/exec", {
        method: "POST",
        body: formData
    })
    
    .catch(err => console.error(err));
    
})