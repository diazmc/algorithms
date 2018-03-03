// Given 4 parameters (param1, param2, param3, param4), 
// print the multiples of param1, 
// starting at param2, and extending to param3. 
// One exception: if a multiple is equal to param4, 
// then skip(dont't print) that one. Do this a WHILE. 
// Given (3,5,17,9), 
// print 6, 12, 15
// (which are all of the multiples of 3 between 5 and 17, 
// except for tha value 9).


function finalCountdown(param1, param2, param3, param4) {
    var mult = param1;

    while(mult <= param3) {

        mult += param1;
        
        if(mult == param4 || mult > param3) {
            continue;
        }
        
        console.log(mult);
        
    }

    
}

finalCountdown(3,5,17,9);