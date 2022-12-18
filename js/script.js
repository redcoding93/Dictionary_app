const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";//dictionary api
//DOM references must exist in html document!
const result = document.getElementById("result");//line 22

// const sound = window.speechSynthesis;

const btn = document.getElementById("search-btn");//line 20

//search button click event for word search. function with no paramters 
//creates a variable for the event and outputs the input value to the a console.
//.value is the Input Text value Property that returns the value of the value attribute for the search text field.
btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                    <p>Now you know!</p>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>

                `;

               
     })       

})

