// const arr2 = arr1.filter((item) => item%2 ===0);
// console.log(arr2);
// const arr3 = arr1.map((item) => item*2)
// console.log(arr3);

// const compare = 1 === '1';
// // so sánh dùng 3 dấu=
// console.log(compare);
const h1Elm = document.getElementById('title');
const wrapperElm =document.getElementById('wrapper-box');
const btn = document.getElementById('btn');

h1Elm.textContent = "Mindx";
h1Elm.classList.add('small-text');
const arr1 = [0,1,2,3,4,5];               

const renderList = (arr) => {

wrapperElm.innerHTML = ""; 
arr1.forEach((item) => {
    const divElm = document.createElement('div');
    divElm.classList.add('box');
    divElm.textContent = item;
    wrapperElm.appendChild(divElm); 
})
}
const handleFilterNumber = () => {
 const arr2 = arr1.filter(item => item%2 !==0)
 let child = wrapperElm.lastElementChild;
 while (child) {
    wrapperElm.removeChild(child);
    child = wrapperElm.lastElementChild;
 }
 renderList(arr2);
}

renderList(arr1);
btn.addEventListener('click', handleFilterNumber)
