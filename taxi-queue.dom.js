// write your DOM code here.
var joinPassenger=document.querySelector(".join_queue");

var leavePassenger=document.querySelector(".leave_queue");

var counter1=document.querySelector(".passenger_queue_count");

var counter2=document.querySelector(".taxi_queue_count");


var taxiJoin=document.querySelector(".join_taxi_queue");

var taxiDepart=document.querySelector(".depart");


let passengerCount=0;
const storePassengers=localStorage.getItem("passengers");
if(storePassengers){
    passengerCount=Number(storePassengers);
}


const peopleQueue = TaxiQueue(passengerCount);
counter1.innerHTML=passengerCount;

joinPassenger.addEventListener("click", function(){
    peopleQueue.joinQueue();
    counter1.innerHTML=peopleQueue.queueLength();
    localStorage.setItem("passengers", peopleQueue.queueLength());
    
})

leavePassenger.addEventListener("click", function(){
    peopleQueue.leaveQueue();
    counter1.innerHTML=peopleQueue.queueLength();
    localStorage.setItem("passengers", peopleQueue.queueLength());
    
})


let taxiCount=0;
const storeTaxis=localStorage.getItem("taxis");
if(storeTaxis){
    taxiCount=Number(storeTaxis);
}


const taxiQueue= TaxiQueue(taxiCount);
counter2.innerHTML=taxiCount;

taxiJoin.addEventListener("click", function(){
    
    taxiQueue.joinTaxiQueue();
    counter2.innerHTML=taxiQueue.taxiQueueLength();
    localStorage.setItem("taxis", taxiQueue.taxiQueueLength());


})





taxiDepart.addEventListener("click", function(){
    
    taxiQueue.taxiDepart();
    counter2.innerHTML=taxiQueue.taxiQueueLength();
    localStorage.setItem("taxis", taxiQueue.taxiQueueLength());
    counter1.innerHTML=peopleQueue.queueLength();
    localStorage.setItem("passengers", peopleQueue.queueLength());
    


    
        
})

