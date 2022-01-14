const date = document.querySelector(".date-of-birth");
const luckyNum = document.querySelector(".lucky-num");
const result = document.querySelector(".result");
const checkLucky = document.querySelector(".check-lucky");


const checkIfLucky = () => {

    if (!date.value || !luckyNum.value) {
        showResult("Please Enter both Values");
    }else{
        const dateNums = date.value.replaceAll("-","");
        let sum = 0;
        for (const num of dateNums) {
            sum += Number(num);
        }
        if (sum%luckyNum.value === 0) {
            showResult(`🥳 🥳 ${luckyNum.value} is Lucky 🥳 🥳`);
        }else{
            showResult(`Nope ${luckyNum.value} is not Lucky 😔`);
        }
    }   
}

const showResult = message => result.innerText = message;


checkLucky.addEventListener("click", checkIfLucky);
