(function(){
    function sum(number1, number2){
        // console.log(number1 + number2)

    }
    sum(5,9)
    sum(13,8)

    //.............................................

    function avg(someNumber1, someNumber2, someNumber3){
        // console.log((someNumber1 + someNumber2 + someNumber3) / 3)
    }

    avg(1, 5, 3)

    //..............................................

    function greaterThan(number3, number4){
        if (number4 > number3){
            return true
        }
        else{
            return false
        }
            
    }
    // console.log(greaterThan(3, 3540))
    // console.log(greaterThan(4000, 45))

    //................................................

    function secondLargest(){
        var array = [4, 2, 10];
            array.sort(function(a, b) {
                return a - b;
            });
            
            return array[array.length - 2]
    }

        // console.log(secondLargest())

    //..................................................
    
    function containsVowel(word){
        var vowelList = "alpha" 
        var result = word.indexOf(vowelList)

        // return result 

        if(result == -1){
            return false
        }else {
            return true
        }

    }
        // console.log(containsVowel("alpha"))

    //.....................................................


    function pigLatin(hello){
        
    }





















})()