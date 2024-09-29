const containerEl = document.querySelector(".container")

const careers = ["Web Developer", "Front End Developer", "Freelancer",]

let carrerIndex = 0


let characterIndex = 0;

updateText()


function updateText() {
containerEl.innerHTML = `
<h1>I am a ${careers[carrerIndex].slice(0,characterIndex)}</h1>
`; 
characterIndex++
setTimeout(updateText, 400);
}