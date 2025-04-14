const url = 'http://localhost:8080/api/gemini';
const div = document.querySelector("div.devsite-searchbox");

const element = '<span id="myExtensionButton" style="cursor: "pointer"">😈</span>';

if (div) {
    // const input = div?.querySelector("input.devsite-search-field");
    div.insertAdjacentHTML("beforebegin", element);
}

const getChangedText = async () => {
    const input = div?.querySelector("input.devsite-search-field") as HTMLInputElement | null;

    if (input) {
        const inputText = input.value;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'text/plain',
            
                  },
                body: inputText,
            });
            if (!response.ok) {
                throw new Error("Error from server " + response.status + response.statusText)
            }
            input.value = "✒️";
            const textChanged = await response.text();
            input.value = textChanged;
        } catch (error: any) {
            console.error(error.message);
        }
    }

}

const addedSpan = document.querySelector("#myExtensionButton");
addedSpan?.addEventListener('click', getChangedText);
