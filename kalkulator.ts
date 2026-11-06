const A = document.getElementById('A') as HTMLInputElement;
const B = document.getElementById('B') as HTMLInputElement;
const buttonplus = document.getElementById('tambah') as HTMLButtonElement;
const buttonminus = document.getElementById('kurang') as HTMLButtonElement;
const buttonmultiply = document.getElementById('kali') as HTMLButtonElement;
const buttondivide = document.getElementById('bagi') as HTMLButtonElement;
const result = document.getElementById('result') as HTMLElement;

function tambah () : void {
    const numA = Number(A.value);
    const numB = Number(B.value);
    result.style.color = "black";
    result.innerText=`Hasil penjumlahan = ${numA + numB}`
}  
function kurang () : void {
    const numA = Number(A.value);
    const numB = Number(B.value);
    result.style.color = "black";
    result.innerText=`Hasil pengurangan = ${numA - numB}`
}  
function kali () : void {
    const numA = Number(A.value);
    const numB = Number(B.value);
    result.style.color = "black";
    result.innerText=`Hasil perkalian = ${numA * numB}`
}  
function bagi () : void {
    const numA = Number(A.value);
    const numB = Number(B.value);
    result.style.color = "black";
    result.innerText=`Hasil pembagian = ${numA / numB}`
}  

buttonplus.addEventListener('click', tambah);
buttonminus.addEventListener('click', kurang);
buttonmultiply.addEventListener('click', kali);
buttondivide.addEventListener('click', bagi);