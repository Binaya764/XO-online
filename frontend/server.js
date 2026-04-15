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
    });
});

 function clicke(){
    console.log("reset button clicked");
}

reset_btn.addEventListener("onclick",clicke());