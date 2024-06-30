const url='https://api.quotable.io/quotes/random';
const quote=document.getElementById('quote');
const author=document.getElementById('author');
const newQuote=document.getElementById('newQuote');
const linkdin=document.getElementById('linkdin');

async function getquote() {
    try {
        const response=await fetch(url);
        const data=await response.json();
        
        quote.innerHTML=data[0].content;
        author.innerHTML=data[0].author;
    } catch (error) {
        quote.innerHTML=error;
    }
}

function linkdinShare() {
    window.open('https://www.linkedin.com/feed/?shareActive=true&text='+quote.innerHTML+'---by '+author.innerHTML);
}

newQuote.addEventListener('click',(e)=>{
    getquote();
})

linkdin.addEventListener('click',(e)=>{
    linkdinShare();
})
