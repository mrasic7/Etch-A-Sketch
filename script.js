const button = document.querySelector('.button');

function CreateDivs(number){
    const container = document.querySelector('#container');
    number = prompt("Enter how many squares you want: ");
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for(let i = 0; i < (number*number); i++){
        let row = document.createElement('div');
        container.appendChild(row);
        row.addEventListener('mouseover', function(event){
            row.style.background = "black";
        });
    }
}

function Remove(){
    const container = document.querySelector("#container");
    container.innerHTML = "";

    CreateDivs();
}


