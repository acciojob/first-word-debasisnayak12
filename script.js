function firstWord(s) {
  // your code here
	if(s.length === 0 || !s){
		return s;
	}
	let extractFirst = s.split(" ");
	return extractFirst[0];
}

// Do not change the code below

const s = prompt("Enter String:"); 
alert(firstWord(s));
