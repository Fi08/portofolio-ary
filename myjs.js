
const mynama = 'Alifiansyah';
let namaindex = 0;
let ceknama = 1;
let nama = document.querySelector('.ketikan');



function textAnimasi() {
    if (namaindex < 12 && ceknama == 1) {
        nama.innerHTML = mynama.slice(0, namaindex) + '|';

        namaindex++;

        if (namaindex == 12) {

            ceknama = 0;
        }


    } else if (namaindex > 0 && ceknama == 0) {
        // nama.innerHTML = mynama.replace(nama.innerHTML, namaindex) + '|';
        nama.innerHTML = mynama.slice(mynama, namaindex - 1) + '|';
        // nama.innerHTML = mynama.replace(nama.innerHTML, nama.innerHTML = namaindex) + '|';

        namaindex--;
        if (namaindex == 0) {

            ceknama = 1;
        }
    }
}

setInterval(textAnimasi, 350);


// let Mbutton = document.querySelector('.burger');
// let ul = document.querySelector('ul');
// Mbutton.addEventListener('click', () => {
//     Mbutton.classList.toggle("ubah");
//     ul.classList.toggle("slide");
//     ul.classList.add("unslide");

// });

let pj1 = document.querySelector('.pj1');

pj1.addEventListener('click', () => {

    pj1.classList.toggle("pj1dts");

});


let pj2 = document.querySelector('.pj2');

pj2.addEventListener('click', () => {

    pj2.classList.toggle("pj2dts");

});


let pj3 = document.querySelector('.pj3');

pj3.addEventListener('click', () => {

    pj3.classList.toggle("pj3dts");

});

let pj4 = document.querySelector('.pj4');

pj4.addEventListener('click', () => {

    pj4.classList.toggle("pj4dts");

});

let pj5 = document.querySelector('.pj5');

pj5.addEventListener('click', () => {

    pj5.classList.toggle("pj5dts");

});

let pj6 = document.querySelector('.pj6');

pj6.addEventListener('click', () => {

    pj6.classList.toggle("pj6dts");

});


window.addEventListener('scroll', ms);


function ms() {
    let elemen = document.querySelectorAll('.element')
    for (let i = 0; i < elemen.length; i++) {
        let tinggi_layar = window.innerHeight - 180;
        let jarak = elemen[i].getBoundingClientRect().top
        if (jarak < tinggi_layar) {
            elemen[i].classList.add('tampilScroll');
        } else {
            elemen[i].classList.remove('tampilScroll');

        }
    }
}