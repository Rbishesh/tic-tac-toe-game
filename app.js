let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-Btn");
let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector("#msg");
let turnO = true; // playerX , playerO
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

// adding event listener on each box
boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        count++;
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        // checking if anyone won
        checkWinner();
    });
});

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const draw = () => {
    msg.innerText = "Game Draw ! No Winner";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showWinner = (winner) => {
    msg.innerText = `Congrats, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns ){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
            else{
                if(count == 9) {
                    draw();
                }
            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);
