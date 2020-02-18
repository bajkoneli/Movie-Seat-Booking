let movies = document.querySelector('#movie').value;

let name = document.querySelector('#name');

let number = document.querySelector('#number');

let price = document.querySelector('#price');

let seats = document.querySelectorAll('.seat');

let seat;

seats.forEach((seat) =>{
  seat = seat;   
  seat.addEventListener('click', selectSpot);


  function selectSpot(e){
    e.preventDefault();

    if (!seat === seat.classList.contains('occupied')){
        seat.classList.toggle('selected');  
    } 
    
    

 }})