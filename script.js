const inputText = document.querySelector(".inputs input"),
buttonText = document.querySelector(".inputs button");
let result = document.querySelector(".inputs p");
let inputFilter;

buttonText.addEventListener("click", () => {
    let reverseInput = inputFilter.split("").reverse().join("");
    result.style.display = "block";
    if(inputFilter != reverseInput){
        return result.innerHTML = `No😔 <span>'${inputText.value}'</span> isn't a palindrome`;
    }
    result.innerHTML = `Yes!😍 <span>'${inputText.value}'</span> is a palindrome`;
 });

inputText.addEventListener("keyup", () => {
    // it will remove all spaces and apecial characters.
    inputFilter = inputText.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(inputFilter){
        return buttonText.classList.add("active");
    }
    result.style.display = "none";
    buttonText.classList.remove("active");
});

