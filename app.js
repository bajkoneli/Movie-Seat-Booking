const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');

let ticetPrice = +movieSelect.value;

// save selected movie price

function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

function getTotalPrice(){  
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  const seatsIndex = [...selectedSeats].map((seat) =>{
    return [...seats].indexOf(seat);
  });

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticetPrice;  
}

// Movie select invent
movieSelect.addEventListener('change', (e) =>{
  ticetPrice = +e.target.value;  

  setMovieData(e.target.selectedIndex, e.target.value);
  
  getTotalPrice();
})

// Seat click invent
container.addEventListener('click', (e) =>{

  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){

   e.target.classList.toggle('selected');
    
   getTotalPrice();

  }
});