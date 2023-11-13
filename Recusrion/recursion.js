function fun(){
    console.log("roshan")
    fun();
}

fun();
// it will continuously log "roshan" to the console until a stack overflow occurs, and the program crashes.





function fun(n){
    if (n == 0){
        return; // Termination condition: stop recursion when n is 0
    }
    console.log("roshan");
    fun(n-1); // Recursive call with a decrementing 
}
fun(3); // Calls the function with an initial value of 3




// typical structure of recursive function

function fun(){

    // base cases...


    // recursive call for values that move toward a base case
}