
//Question1.1
//does a string have all unique characters?

eval = (tests)=>{
    for(t of tests){
        if(t[1] != unique_chars(t[0])){
            return {error:"test FAILED", case:t}   
    }

    return {ok: "all test cases passed"}
    }
}

function unique_chars(str){
    let temp = {}
    for(s of str){
        if(temp[s]){
            return false
        }
        else{
            temp[s] = 1
        }
    }
    return true
}

function unique_chars_no_additional(str){
    str.sort()

    for(var i = 1; i < str.length; i++){
        if(str[i - 1] == str[i]){
            return false
        }
    }

    return true
}

let tests = [["abcsa", false], ["abc", true], ["abcdksjfdkjsfhsdlfhdsjklfhsdkfjsh", false]]
console.log(eval(tests))