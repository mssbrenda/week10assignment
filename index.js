//we want each movie to have its own id 

let id = 0; 
//wehn we click the sumbit button we want 
//to be able to create a new row 

document.getElementById('submit').addEventListener('click', ()=>{
// we are adding an event listener and passign in a function
let table = document.getElementById('movielist');
//now that we have a reference to the table we want to start creating rows 
let row = table.insertRow(1)
//position 1 is becausewe have a header 
row.setAttribute('id',`item-${id}`)

//each row gets an id 
row.insertCell(0).innerHTML = document.getElementById('new-movie').value;
row.insertCell(1).innerHTML = document.getElementById('release-date').value;
row.insertCell(2).innerHTML = document.getElementById('producer').value;

document.appendChild

document.getElementById('new-movie').value = '' ;

});





