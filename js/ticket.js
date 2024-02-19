const allBtn = document.getElementsByClassName('add-btn');
for(const btn of allBtn){
  btn.addEventListener('click', function(){
   const seat = btn.innerHTML;
   addColor(seat);
   disableClickedButton(seat);
   selectedSeat();
   showSelection(seat);
   seatLeft();
   handleNext();
  })
 
}



function addColor(elementId){
 const element =  document.getElementById(elementId);
 element.classList.add('bg-lime-500');
}
function seatLeft(){
  const leftSeat = document.getElementById('seat-left');
  const leftSeatText = leftSeat.innerText;
  const leftSeatNumber = parseInt(leftSeatText);
  const AvilableSeat  = leftSeatNumber - 1;
  leftSeat.innerText = AvilableSeat;
} 

function selectedSeat(){
  const seatSelected = document.getElementById('selected-seat');
  const seatSelectedText = seatSelected.innerText;
  const seatSelectedNumber = parseInt(seatSelectedText);
  const newSeat = seatSelectedNumber + 1;
  seatSelected.innerText = newSeat;
}

function showSelection(elementId){
  const seatContainer = document.getElementById('seat-container');
  const priceText = document.getElementById('amount').innerText;
  const price = parseInt(priceText);
  
  const p = document.createElement('p');
  p.innerText = elementId;
  const p2 = document.createElement('p');
  p2.innerText = 'Economoy';
  const p3 = document.createElement('p');
  p3.innerText = price;
  seatContainer.appendChild(p);
  seatContainer.appendChild(p2);
  seatContainer.appendChild(p3);
  setTotalPrice(price)
  // p.innerText = 
}

function setTotalPrice(elementId){
  const element = document.getElementById('total-price');
  const grandTotalPrice = document.getElementById('grand-total')
  const elementText =  element.innerText;
  const elementNumber = parseInt(elementText);
  const newPrice = elementNumber + elementId;
  element.innerText = newPrice;
  grandTotalPrice.innerText = newPrice;
  grandTotal(newPrice);
  disableBtn(newPrice);
}

 function grandTotal(elementId){
    const discountInput = document.getElementById('fifteen');
    const discount = discountInput.innerText;
    // const discount = discountText.toLowerCase();
    const coupleInput = document.getElementById('twenty');
    const coupleDiscount = coupleInput.innerText;
    // const coupleDiscount = coupleInputText.toLowerCase();
    

    document.getElementById('apply').addEventListener('click', function(){
    const element = document.getElementById('coupon');
    const coupon = element.value;
    // const coupon = elementText.toLowerCase();
    const grandTotalInput = document.getElementById('grand-total');
    const grandTotalText = grandTotalInput.innerText;
    // const grandTotalNumber= parseInt(grandTotalText);
    if(coupon == discount){
      const discountAmount = elementId * 0.15;
      const grandTotal = elementId - discountAmount;
      grandTotalInput.innerText = grandTotal;
      element.classList.add('hidden');
      document.getElementById('apply').classList.add('hidden');
    } else if(coupleDiscount == coupon){
      const discountAmount = elementId * 0.20;
      const grandTotal = elementId - discountAmount;
      grandTotalInput.innerText = grandTotal;
      element.classList.add('hidden');
      document.getElementById('apply').classList.add('hidden');
    }
   })
 }

 
 function handleNext(){
  const next =  document.getElementById('next');
  next.classList.remove('pointer-events-none');
 }
 
 function disableBtn(elementId){
 const elements = document.getElementsByClassName('add-btn');
 for(const element of elements){
  if(elementId == 2200){
     element.classList.add('pointer-events-none');
  }
 }
 }
 function disableClickedButton(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('pointer-events-none');
 }