const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
author = document.querySelector(".name"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
facebookBtn = document.querySelector(".twitter");

// random quote function
 function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText =" Loading Quote...";

    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerHTML = result.content;
        author.innerHTML = result.author;
        quoteBtn.innerText =" New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click",()=>{
    //it is a web sppech api
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by Aashish and ${author.innerHTML}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click",()=>{
    if(navigator.clipboard.writeText(quoteText.innerHTML + " - by Aashish Rijal")){
        alert("text copied to clipboard");
    }
});

facebookBtn.addEventListener("click", () => {
    // Assuming quoteText.innerHTML contains the text you want to share on Facebook
    let facebookUrl = `https://www.twitter.com/intent/tweet?u=${quoteText.innerHTML}`;
    window.open(facebookUrl, "_blank");
});

quoteBtn.addEventListener("click",randomQuote);


randomQuote();