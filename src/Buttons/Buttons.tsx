import styles from "./Buttons.module.css"

const Buttons = () => {
    const TEST_MESSAGE = "WORKS !!!"
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
                    if (input) {
                        input.value = receivedMessage;
                    }
                }
            },
            args: [TEST_MESSAGE]
        })
    }

  return (
    <div className={styles.buttonContainer}>
    <button id="moreProffesional" type="button" onClick={clickHandler}>Proffesional</button>
    <button id="moreFunny" type="button">Funny</button>
  </div>
  )
}

export default Buttons