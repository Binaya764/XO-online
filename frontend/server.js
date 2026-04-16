let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let turn_x = true; //players

const winningPattern= [
    [0,1,2],[0,3,6],[0,4,8], [1,4,7], [2,5,8], [2,4,6],
    [2,1,0], [3,4,5], [5,4,3],
    [6,7,8], [6,3,0], [6,4,2],[7,4,1], [8,5,2],[8,4,1],[8,7,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn_x){
            box.innerText = "X";
            turn_x = false;
        }
        else{
            box.innerText = "O";
            turn_x = true;
        }
        box.disabled = true;
        check_winner();
    });
});

function check_winner(){
    for(let pattern of winningPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
                boxes.forEach(box => box.disabled = true);
                
               
              
            }
        }
    }
}


reset_btn.addEventListener("click",()=>{
    console.log("Reset button clicked");
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
});
