let zon = document.getElementById("zon_svg");
let tekst = document.getElementById("zon_tekst");
let vogel = document.getElementById("vogel");
let tekst_bord2 = document.getElementById("tekst_bord2");
let lijst1 = document.getElementById("lijst1")
let lijst2 = document.getElementById("lijst2")

function zonGroot() {

    if (zon.classList.contains('zon-width')) {
        zon.classList.remove('zon-width');
        tekst.classList.remove('display');
    } else {
        zon.classList.add('zon-width');
        tekst.classList.add('display');
    }
}

zon.addEventListener("click", zonGroot);
tekst.addEventListener("click", zonGroot);

function showTekst() {

    if (lijst1.classList.contains('bord_tekst')) {
        lijst1.classList.remove('bord_tekst');
        lijst2.classList.remove('bord_tekst');
        tekst_bord2.classList.remove('bord_tekst');
    } else {
        lijst1.classList.add('bord_tekst');
        lijst2.classList.add('bord_tekst');
        tekst_bord2.classList.add('bord_tekst');
    }
}

vogel.addEventListener("click", showTekst);

let kind3 = document.getElementById("kind3");
let origOffsetX = 800;

function onScroll(e) {
    if (window.scrollX >= origOffsetX) {
        kind3.style.position = "fixed";
        kind3.style.left = "275px"
    } else {
        kind3.style.position = "absolute";
        kind3.style.left = "70%"
    }
}

document.addEventListener('scroll', onScroll);
