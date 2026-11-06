"use strict";
const A = document.getElementById('A');
const B = document.getElementById('B');
const buttonplus = document.getElementById('tambah');
const buttonminus = document.getElementById('kurang');
const buttonmultiply = document.getElementById('kali');
const buttondivide = document.getElementById('bagi');
const result = document.getElementById('result');
function tambah() {
    const numA = Number(A.value);
    const numB = Number(B.value);
    result.style.color = "black";
    result.innerText = `Hasil penjumlahan = ${numA + numB}`;
}
function kurang() {
    const numA = Number(A.value);
    const numB = Number(B.value);
    result.style.color = "black";
    result.innerText = `Hasil pengurangan = ${numA - numB}`;
}
function kali() {
    const numA = Number(A.value);
    const numB = Number(B.value);
    result.style.color = "black";
    result.innerText = `Hasil perkalian = ${numA * numB}`;
}
function bagi() {
    const numA = Number(A.value);
    const numB = Number(B.value);
    result.style.color = "black";
    result.innerText = `Hasil pembagian = ${numA / numB}`;
}
buttonplus.addEventListener('click', tambah);
buttonminus.addEventListener('click', kurang);
buttonmultiply.addEventListener('click', kali);
buttondivide.addEventListener('click', bagi);
