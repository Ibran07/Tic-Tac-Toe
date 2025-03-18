//Accessing All the boxes of Tic Tac Toe(2), PlayAgain btn(3) &WinnerMsg div(4)
let boxes = document.querySelectorAll(".box"); //using let bcz we need to update the text.
const playBtn = document.querySelector(".playAgain");
let displayMsg = document.querySelector(".winnerMsg");


//Creating Winning Pattern of Game
const winPattern = [
    [0, 1, 2],//
    [3, 4, 5],//
    [6, 7, 8],//Winning Pattern Row Wise.
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],//Winning Pattern Column Wise
    [0, 4, 8],
    [2, 4, 6]//Winning Pattern Diagonal Wise
]

let turn = true;
let count = 0; //Counting how many time button was clicked;
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn){
            box.innerText = "O";
            turn = false;
        }
        else{
            box.innerText = "X";
            turn = true;
        }
        box.disabled = "true";
        count += 1;
        console.log(count);
        //winning Pattern function
        winner();
    })
})
//Function to Check winner
const winner = () =>{
    for (let val of winPattern){
        //Storing Values of Game Boxes
        let pos0Val = boxes[val[0]].innerText; 
        let pos1Val = boxes[val[1]].innerText; 
        let pos2Val = boxes[val[2]].innerText; 

        //Conditions
        //Checking if box is empty or not
        if(pos0Val !== "" && pos1Val !== "" && pos2Val !== "")
        {
            if(pos0Val === pos1Val && pos1Val === pos2Val){
                //Winner event is Occurs
                btnDisable();//disabled all button so that after winning no more inputs are accept
                
                //Display Winner Message
                displayMsg.style.display = "flex";
                displayMsg.innerText = `${pos0Val} Wins!`
                return;

            }

            //Display when there is no-winner
            else if(count === 9){
                displayMsg.style.display = "flex";
                displayMsg.innerText = "Draw";
                console.log("world");
            }
        }
    }
};

//Disabling all Button , Since disabled function can't be use in nodeList that why we need take out each element of nodeList.
const btnDisable = () =>{
    boxes.forEach((box)=>{
        box.disabled = true;
    })
}

//Logic for button
playBtn.addEventListener("click", () => {
    boxes.forEach((box) =>{
        turn = true; //always starting with O player
        box.disabled = false; //so that box can re-click
        box.innerText = ""; //so that all boxes become empty
        displayMsg.style.display = "none"; //so that winning msg is hide
        count = 0;
    })
});