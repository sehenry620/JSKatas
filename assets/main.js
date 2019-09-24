(function(){
    function sum(number1, number2){
        // console.log(number1 + number2)
            return (number1 + number2)
    }
    // console.log (sum(5,9))
    // console.log (sum(13,8))

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
    // function firstLargest(numberArray){
    //     let firstNumber = 0;

    //     for (let i = 0; i < numberArray.length; i++){
    //         // console.log(numberArray[i])
    //         if (firstNumber < numberArray[i]){
    //             firstNumber = numberArray[i]
                
    //         }
    //     }
    //     return firstNumber
    // }
    // console.log (firstLargest([3, 1, 5, 2, 3, 4]))

    //..................................................


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
        var vowelList = "aeiou" 
        var result = word.indexOf(vowelList)

        let foundVowel = false
        for(let i = 0; i < vowelList.length; i++){

           result = word.indexOf(vowelList[i])
           if(result == -1){
            
            }else {
            foundVowel = true 

        }

            // console.log(vowelList[i])
        } 

        return (foundVowel)

    }
        // console.log(containsVowel("alpha"))

    //.....................................................


    function pigLatin(hello){
        
    }


    //.....................................................

    function longestWord(sentence){
        
        let wordArray = sentence.split(' ');
        let longestWord = ""

        // console.log(wordArray);
        for(let i = 0; i < wordArray.length; i++){
            // console.log(wordArray[i])
            let currentWord = wordArray[i]
            let currentwordLength = wordArray[i].length

        if (currentwordLength > longestWord.length)
            longestWord = currentWord 
        }
        
        return longestWord
    }
    
    console.log (longestWord('have you ever seen a penguin go to tea?')); 

    

    




















})()