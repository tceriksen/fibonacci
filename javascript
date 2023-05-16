    function fibonacciGenerator (n) {    
    
     let output = [0, 1];

    if (n == 1) {
        output = [0];
        return output;
    } else if (n == 2) {
        output = [0,1]
        return output;
    } 
    
    if (n > 2) {
    
        while (n > output.length) {
            let lastIndex = output.length - 1;
            let secondLastIndex = output.length - 2;
            output.push(output[lastIndex] + output[secondLastIndex]);
            
        } return output;
    }
}
