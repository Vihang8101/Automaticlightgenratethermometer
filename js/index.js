{/* <span id="temp" class="fa"> </span> */}
const tempLoad =()=>    
{


let temp = document.querySelector('#temp')
temp.innerHTML = "&#xf2cb";
temp.style.color = "#fff"
setTimeout(() => {
    temp.innerHTML = "&#xf2ca";
    temp.style.color = "blue"
}, 1000);
setTimeout(() => {
    temp.innerHTML = "&#xf2c9";
    temp.style.color = "orange"
}, 2000);
setTimeout(() => {
    temp.innerHTML = "&#xf2c8";
    temp.style.color = "green"
}, 3000);
setTimeout(() => {
    temp.innerHTML = "&#xf2c7";
    temp.style.color = "red"
}, 4000);
// setTimeout(() => {
//     temp.innerHTML = "&#xf2cb";
//     temp.style.color = "#fff"
// }, 5000);

}
tempLoad();
setInterval(tempLoad, 5000);