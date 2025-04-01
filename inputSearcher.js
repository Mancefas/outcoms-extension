const pBtn = document.getElementById("moreProffesional");
const fBtn = document.getElementById("moreFunny");
const lBtn = document.getElementById("lessWords");
const mBtn = document.getElementById("moreWords");

const div = document.querySelector("div.devsite-searchbox");

const changeText = () => {
    if (div) {
        const input = div.querySelector("input");
        if (input) {
            
            input.value = "VEIKIA!!!"
        }
    }
    console.log("siaip veikia");
    console.log(div);

}

pBtn.addEventListener('click', () => changeText());