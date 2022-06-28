let qoute = document.querySelector(".qoute"),
    author = document.querySelector(".author"),
    btn  = document.querySelector(".btn");



    window.onload = function() {
        let random =  Math.floor(Math.random() * qoutes.length);
        qoute.textContent = qoutes[random].text;
        author.textContent = qoutes[random].author
    }
    btn.addEventListener("click", ()=> {
        let random =  Math.floor(Math.random() * qoutes.length);
        qoute.textContent = qoutes[random].text;
        author.textContent = qoutes[random].author
    })