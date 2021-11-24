//  benifit of extra funciton
function pruductFunction( price, id){ 
 const memoryPrudct =   document.getElementById(id);
 memoryPrudct.innerText = price;
  } 
//   total price derection


// memory
 document.getElementById('memory-cost-1').addEventListener('click', function(){
    //   const MemoryCost = document.getElementById('memory-price').innerText = 20;
    pruductFunction(0,  'memory-price' )
    advancedFunction('memory-price');
   })
   document.getElementById('memory-cost').addEventListener('click', function(){
pruductFunction(180,'memory-price')
    // const memoryCostNew = document.getElementById('memory-price').innerText = 100;
    advancedFunction('memory-price')
})
// storage
 document.getElementById('without-ssd-cost').addEventListener('click', function() {
pruductFunction(0, 'storage-price');
 }) 
 document.getElementById('low-ssd-cost').addEventListener('click', function(){
    pruductFunction(100, 'storage-price')
 });
 document.getElementById('heigh-ssd-cost').addEventListener('click', function(){
    pruductFunction(180, 'storage-price');
 })

 function loadDliveryData(){
     pruductFunction(0, 'delivery-price');
 } ;
 function loadDataDelivery(){
     pruductFunction(20,  'delivery-price' ) 
 }
 