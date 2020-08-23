// queryselectors
const nameCard = document.querySelector(".name");
const jobCard = document.querySelector(".job");
const reviewCard = document.querySelector(".review");
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");
const btnRandom = document.querySelector(".btn-random");

// constants
const reviews = [
    {
        id: 0,
        name: "Talha Bayansar",
        job: "Programmer",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odit, reiciendis enim pariatur repudiandae labore doloremque cupiditate eligendi dignissimos quibusdam at temporibus accusamus harum assumenda, vitae placeat fugit animi esse.",
    },
    {
        id: 1,
        name: "Enes Bayansar",
        job: "Business Man",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odit, reiciendis enim pariatur repudiandae labore doloremque cupiditate eligendi dignissimos quibusdam at temporibus accusamus harum assumenda, vitae placeat fugit animi esse.",
    },
    {
        id: 2,
        name: "Niyazi Bayansar",
        job: "Worker",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odit, reiciendis enim pariatur repudiandae labore doloremque cupiditate eligendi dignissimos quibusdam at temporibus accusamus harum assumenda, vitae placeat fugit animi esse.",
    },
    {
        id: 3,
        name: "Sermin Erdem",
        job: "Officer",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odit, reiciendis enim pariatur repudiandae labore doloremque cupiditate eligendi dignissimos quibusdam at temporibus accusamus harum assumenda, vitae placeat fugit animi esse.",
    },
];

// variables
let id = 0;

//functions
const defaultAll = function() {
    id = reviews[0].id;
    nameCard.innerText = reviews[0].name;
    jobCard.innerText = reviews[0].job;
    reviewCard.innerText = reviews[0].review;
};

const previous = (e) => {

};

//eventlisteners
btnLeft.addEventListener("click", previous);
window.onload = defaultAll();