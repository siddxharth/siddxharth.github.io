const countEl = document.getElementById('count');

countVisits();

function countVisits(){
    fetch('https://api.countapi.xyz/update/siddxharth/count/?amount=1')
    .then((res) => res.json())
    .then((res) => {
        countEl.innerHTML = res.value;
    });
}