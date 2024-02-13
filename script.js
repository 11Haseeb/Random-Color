const container = document.getElementById("firstContainer");
const allItems = document.getElementsByClassName("item");

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
};
for(let item of allItems){
    item.addEventListener("click", ()=>{
        const randomColor = randomColorGenerator();
        item.style.background = randomColor;
        // item.textContent = randomColor;
    });
};