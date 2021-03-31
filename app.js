let input = document.getElementById("input");
let btn = document.getElementById("btn");
let hidde = document.getElementsByClassName("hidde");
let uppercase = document.getElementById("uppercase");
let welcome = document.getElementById("welcome");

welcome.classList.add("angry");
uppercase.classList.add("angry");




btn.addEventListener("click", function() {
    let regex = /^[a-zA-Z]{2,15}$/;
    let str = input.value;


    const good = (regex.test(str))
    console.log(good);
    if (good) {
        input.classList.remove("is-invalid");

        let store = input.parentNode.remove();
        btn.remove()

        uppercase.classList.add("happy");
        welcome.classList.add("happy");

        console.log("this is match");

    } else {
        console.log("this is note match");
        input.classList.add("is-invalid");
    }
})




let quize = [{
        question: "what is HTML",
        a: "hyper text markup langauge",
        b: "client side sripting langauge",
        c: "ooPS",
        d: "client side sripting langauge",
        ans: "hyper text markup langauge",
    },
    {
        question: "what is java",
        a: "client side sripting langauge",
        b: "general purpose programing langauge",
        c: "computer programing langauge",
        d: "ooPS",
        ans: "computer programing langauge",

    },
    {
        question: "what is javascript",
        a: "hyper text markup langauge",
        b: "client side sripting langauge",
        c: "serverside sripting langauge",
        d: "all of this",
        ans: "serverside sripting langauge",
    },
    {
        question: "what is full form of oops",
        a: "object oriented programing system",
        b: "object oriented program setup",
        c: "object oriented programing sensoir",
        d: "object orienting program  langaug",
        ans: "object oriented programing system",
    },
    {
        question: "what is full-form of S.I.M",
        a: "server internet manage",
        b: "subscriber indentification module",
        c: "subscriber interface model",
        d: "sub item manager",
        ans: "subscriber indentification module",
    }
]


let final = document.getElementById("final");
let option = document.getElementById("option");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let forms = document.querySelectorAll('.forms');
let good = document.getElementById("good");


let questioncount = 0;

function getquestion() {
    if (questioncount < quize.length) {
        option.innerHTML = quize[questioncount].question;
        option1.innerHTML = quize[questioncount].a;
        option2.innerHTML = quize[questioncount].b;
        option3.innerHTML = quize[questioncount].c;
        option4.innerHTML = quize[questioncount].d;
        questioncount++;
    } else {
        alert("thanks for attend");
        good.innerHTML = `your score 🥇=${score}/${quize.length}
        <div>right answer=1:hyper text markup langauge 2:computer programing langauge
        3:client side sripting langauge 4:object oriented programing system 5:subscriber indentification module </div>`;

        setTimeout(() => {
            window.location.reload();
        }, 10000);

    }

}
getquestion();


let kuk = 0;
let score = 0;
let arr = ["option1", "option3", "option2", "option1", "option2"];


const getcheckanswer = () => {
    let form;
    forms.forEach((current) => {
        if (current.checked) {
            form = current.nextElementSibling.id;
        }

    });
    return form;
}

const greet = function() {
    forms.forEach((e) => {
        (e.checked = false)
    })
}
greet();

final.addEventListener("click", function() {
    console.log(arr[kuk]);

    let om = getcheckanswer();
    console.log(om);
    greet();

    if (om == arr[kuk]) {
        kuk++;
        score++;
        console.log(score);
    } else {
        console.log("this is error");
        kuk++;
    }
    getquestion();


});