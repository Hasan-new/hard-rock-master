const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function(){
    const inputLyrics = document.getElementById('input').value;
    fetch(`https://api.lyrics.ovh/suggest/${inputLyrics}/`)
.then(res => res.json())
.then(data => {
    console.log(data);
})





const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function(){
    const inputLyrics = document.getElementById('input').value;
    fetch(`https://api.lyrics.ovh/suggest/${inputLyrics}/`)
.then(res => res.json())
.then(data => {
    console.log(data);
})
})
