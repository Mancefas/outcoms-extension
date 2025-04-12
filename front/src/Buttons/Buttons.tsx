import askGemini from "../scripts/askGemini"
// import { useState } from "react"
import styles from "./Buttons.module.css"

const Buttons = () => {
    // const [someText, setSomeText] = useState<string>("");

    const TEST_MESSAGE = "added button to management system time report"
    const clickHandler = async () => {
        
        let [tab] = await chrome.tabs.query({active: true});
        
        chrome.scripting.executeScript({
            target: {tabId: tab.id!},
            // func: () => {
            //     document.body.style.display = 'none'
            // }
            func: (receivedMessage) => {
                const div = document.querySelector("div.devsite-searchbox");
                                
                if (div) {
                    const input = div.querySelector("input");
                    // const currentText = input?.value;
                    // const convertedText = await askGemini(currentText);
                    if (input) {
                        input.value = receivedMessage;
                    }
                }
            },
            args: [TEST_MESSAGE]
        })
    }

    const asd = async () => {
        const answ = await askGemini(TEST_MESSAGE);
        console.log(answ);
    
    }

  return (
    <div className={styles.buttonContainer}>
    <button id="moreProffesional" type="button" onClick={clickHandler}>Proffesional</button>
    <button id="moreFunny" onClick={asd} type="button">tes</button>
  </div>
  )
}

export default Buttons