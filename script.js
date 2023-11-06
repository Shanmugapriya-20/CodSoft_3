document.addEventListener("DOMContentLoaded", () => {
    const result = document.getElementById("result");
    let currentInput = "";

    document.querySelector(".buttons").addEventListener("click", (event) => {
        if (event.target.matches("button")) {
            const buttonValue = event.target.textContent;

            if (buttonValue === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = "Error";
                }
            } else if (buttonValue === "C") {
                currentInput = "";
            } else {
                currentInput += buttonValue;
            }

            result.value = currentInput;
        }
    });
});
