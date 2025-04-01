chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "changeInput") {
        const div = document.querySelector("div.devsite-searchbox");
        console.log(div);
        if (div) {
            const input = div.querySelector("input");
            console.log(input);
            if (input) {
                input.value = message.text;
            }
        }
    }
});