const buttonkurang = document.getElementsByClassName('button-kurang');
const buttontambah = document.getElementsByClassName('button-tambah');
const jumlah = document.getElementsByClassName('jumlah');
const tmakanan = document.getElementById('tmakanan');
const tminuman = document.getElementById('tminuman');
const tharga = document.getElementById('tharga');

function perbarui() {
    tmakanan.innerHTML = parseInt(jumlah[0].innerHTML) + parseInt(jumlah[1].innerHTML);
    tminuman.innerHTML = parseInt(jumlah[2].innerHTML) + parseInt(jumlah[3].innerHTML);
    tharga.innerHTML = parseInt(jumlah[0].innerHTML) * 6 +
        parseInt(jumlah[1].innerHTML) * 3 +
        parseInt(jumlah[2].innerHTML) * 5 +
        parseInt(jumlah[3].innerHTML) * 3 +
        ".000";
}

for (let i = 0; i < buttontambah.length; i++) {
    buttontambah[i].addEventListener("click", () => {
        jumlah[i].innerHTML = parseInt(jumlah[i].innerHTML) + 1;
        perbarui();
    });
    buttonkurang[i].addEventListener("click", () => {
        jumlah[i].innerHTML = jumlah[i].innerHTML - 1;
        if (jumlah[i].innerHTML == -1) {
            jumlah[i].innerHTML = 0
        };
        perbarui();
    });
}
