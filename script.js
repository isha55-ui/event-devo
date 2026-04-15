let users = JSON.parse(localStorage.getItem('users')) || {};
function logout(){
  localStorage.removeItem('currentUser');
  window.location='index.html';
}

function addEvent(){
  if(!eventName.value) return alert("Enter event name");
  let e={name:eventName.value, location:eventLocation.value, price:eventPrice.value};
  events.push(e);
  saveData();
  displayEvents();
}

function displayEvents(){
  let div=document.getElementById('events');
  if(!div) return;
  div.innerHTML='';
  events.forEach((e,i)=>{
    div.innerHTML+=`
    <div class='card'>
      <h3>${e.name}</h3>
      📍 ${e.location}<br>
      💰 ₹${e.price}<br>
      <button onclick='addToCart(${i})'>Add to Cart</button>
    </div>`;
  });
}

function addToCart(i){
  cart.push(events[i]);
  saveData();
  alert("Added to cart");
}

function displayCart(){
  let div=document.getElementById('cart');
  if(!div) return;
  div.innerHTML='';
  cart.forEach((c,i)=>{
    div.innerHTML+=`
    <div class='card'>
      ${c.name} - ₹${c.price}
      <button onclick='removeItem(${i})'>Remove</button>
    </div>`;
  });
}

function removeItem(i){
  cart.splice(i,1);
  saveData();
  displayCart();
}

function searchEvent(){
  let val=document.getElementById('search').value.toLowerCase();
  let div=document.getElementById('events');
  div.innerHTML='';
  events.filter(e=>e.name.toLowerCase().includes(val)).forEach((e,i)=>{
    div.innerHTML+=`<div class='card'>${e.name}</div>`;
  });
}
