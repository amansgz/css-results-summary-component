const url = './scripts/data.json';

fetch(url)
.then(response => response.json())
.then(data => showInfo(data));

function showInfo(data) {
  let output = '';
  for(let item of data) {
    output += `
    <div class= 'score'>
      <div>
        <img class= 'score-icon'
        src= ${item.icon} 
        alt= ''>
        <p class= 'score-category'>${item.category}</p>
      </div>
      <div>
        <span class= 'score-bold'>${item.score} </span>
        <span class= 'score-light'> / 100</span>
      </div>  
    </div>  
    `
  }
  document.getElementById('scores').innerHTML = output;
}
