 /*  extra memory cost function  */
 function getMemoryCost(constNumber, isChange){
    const memoryCost = document.getElementById(constNumber); 
if(isChange == true){
        // const memoryNumber = parseInt(memoryCost.innerText)   ; 
        memoryCost.innerText =0  ;
}
 else{
        //  const memoryNumber = parseInt(memoryCost.innerText);
         memoryCost.innerText =  180  ; 
 }
 }
 
 /* extra  storage cost function  */
function getStorageCost(storageNumberid,numberStorage ){
    const storagCost = document.getElementById(storageNumberid);
       if(numberStorage == 0  ){
           storagCost.innerText = 0; 
       }
       else if(numberStorage == 100){
           storagCost.innerText = 100;
       }
       else{
           storagCost.innerText = 180
       }

}
/* delivery cost function */
function getDeliveryCost(deliveryNumberId, deliveryCharge){
    const deliveryCost = document.getElementById(deliveryNumberId);
if( deliveryCharge == 0 ){
    deliveryCost.innerText = 0; 
}
else if( deliveryCharge == 20){
    deliveryCost.innerText = 20;
}
} 

 /* extra memory cost */
document.getElementById('memory-8gb').addEventListener('click', function(){ 
getMemoryCost('extra-memory-cost', true);
})

document.getElementById('memory-16gb').addEventListener('click', function(){ 
getMemoryCost('extra-memory-cost', false)
})

/* extra storage cost */
document.getElementById('storage-256').addEventListener('click', function(){
  getStorageCost('extra-storage-cost', 0);
})
document.getElementById('storage-512gb').addEventListener('click',function(){
    getStorageCost('extra-storage-cost',100);
}) 

document.getElementById('storage-1tb').addEventListener('click', function(){
    getStorageCost('extra-storage-cost',180);
})
// delivery charge 
document.getElementById('aug-25').addEventListener('click', function(){
//    const deliveryCost = document.getElementById('delivery-charge');
//    deliveryCost.innerText =  0; 
getDeliveryCost('delivery-charge', 0);

}) 
document.getElementById('aug-21').addEventListener('click', function(){
//    const deliveryCost21 = document.getElementById('delivery-charge');
//    deliveryCost21.innerText = 20;
getDeliveryCost('delivery-charge', 20);

})