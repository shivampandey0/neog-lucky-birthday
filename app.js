const date = document.querySelector(".date-of-birth");
const luckyNum = document.querySelector(".lucky-num");
const result = document.querySelector(".result");
const checkLucky = document.querySelector(".check-lucky");

checkLucky.addEventListener("click", checkIfLucky);

function checkIfLucky() {

    if (!date.value || !luckyNum.value) {
        showResult("Please Enter both Values");
    }else{
        let dateNums = date.value.replaceAll("-","");
        let sum = 0;
        for (const num of dateNums) {
            sum += Number(num);
        }
        if (sum%luckyNum.value === 0) {
            showResult("It's Lucky");
        }else{
            showResult("Nope it's not Lucky");
        }
    }   
}

function showResult(message) {
    result.innerText = message;
}