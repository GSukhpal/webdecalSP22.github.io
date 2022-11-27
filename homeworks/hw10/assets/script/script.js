// s1 outfit
let s1 = document.getElementById("s1")/* get #s1 outfit */
let body = document.getElementById("body");
/* the process: */
function hide(){
	let out = document.getElementsByClassName("outfit");
	for (let i =0; i<out.length; i++) {
		const var1 = out[i].id;
		document.getElementById(var1).style.display = "none";
	}
}
s1.onclick = function() {
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
	body.classList.add("outfit")
	hide();
	let o1 = document.getElementById("o1");
	o1.style.display = "block";		
};

// s2 outfit
/* get #s2 outfit */
/* repeat process */
s2.onclick = function() {
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
	body.classList.add("outfit")
	hide();
	let o1 = document.getElementById("o2");
	o1.style.display = "block";		
};
// s3 outfit
/* get #s3 outfit */
/* repeat process */
s3.onclick = function() {
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
	body.classList.add("outfit")
	hide();
	let o1 = document.getElementById("o3");
	o1.style.display = "block";		
};
// s4 outfit
/* get #s4 outfit */
/* repeat process */
s4.onclick = function() {
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
	body.classList.add("outfit")
	hide();
	let o1 = document.getElementById("o4");
	o1.style.display = "block";		
};
// s5 outfit
/* get #s5 outfit */
/* repeat process */
s5.onclick = function() {
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
	body.classList.add("outfit")
	hide();
	let o1 = document.getElementById("o5");
	o1.style.display = "block";		
};
// strip outfit

let strip = document.getElementById("strip-button"); /* get #strip-button */
strip.onclick = function() {
	/* call the function you created to hide all the outfits */
	/* show #body */
	hide();
	body.style.display = "block";
};