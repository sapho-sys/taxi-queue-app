function TaxiQueue() {

	let counter = 0;
  if (counter) {
    counter = counter;
  }

  let counter2=0;
  if(counter2){
	  counter2=counter2;
  }


	function joinQueue() {
		return counter++;
		

	}

	function leaveQueue() {
		if(counter > 0){
			counter--;
		}
		

	}

	function joinTaxiQueue() {
		return counter2++;
		

	}

	function queueLength() {
		return counter;
		

	}

	function taxiQueueLength() {
		return counter2;
		

	}

	function taxiDepart(){
		if(queueLength() >= 12 && taxiQueueLength() > 0){
			counter -= 12;


		}

	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart,
		
	}
}