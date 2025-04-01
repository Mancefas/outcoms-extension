const pBtn = document.getElementById("moreProffesional");
const fBtn = document.getElementById("moreFunny");
const lBtn = document.getElementById("lessWords");
const mBtn = document.getElementById("moreWords");

const changeText = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "changeInput", text: "VEIKIA!!!" });
    });
};

pBtn.addEventListener('click', changeText);