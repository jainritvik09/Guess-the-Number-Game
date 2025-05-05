function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let secretNum = randomNum(1,10);

let secret = document.querySelector("#secretBox");
secret.value = secretNum;

let user = document.querySelector("#userBox");

let visibilityCorrectAns = false;

let submitBtn = document.querySelector("#submit");

let resultMsg = document.querySelector("#result");

submitBtn.addEventListener('click', function() {
    if (Number(user.value) === secretNum ) {
        console.log("You guessed the correct number");
        resultMsg.innerText = "Hooray! You guessed the correct number \u{1F389}";
        visibilityCorrectAns = true;
        if (visibilityCorrectAns){
            secretBox.type = "text";
        }
    }
    else if (user.value == "") {
        console.log("No value has been entered");
        resultMsg.innerText = "You must enter a value \u{26A0}";
        
    }
    else {
        console.log("You guessed the wrong number");
        resultMsg.innerText = "Oops! You guessed the wrong number. \u{1F641}";
        visibilityCorrectAns = true;
        if (visibilityCorrectAns){
            secretBox.type = "text";
        }
    }
})

let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener('click', function() {
    secretNum = randomNum(1,10);
    secret.value = secretNum;
    user.value = "";
    secret.type = "password";
    visibilityCorrectAns = false;
    resultMsg.innerText = "";
})
