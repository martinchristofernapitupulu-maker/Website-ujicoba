// Keranjang
let keranjang = [];
let total = 0;

// Format rupiah
function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

// Tambah produk
function tambahProduk(nama, harga) {
    keranjang.push({ nama, harga });
    total += harga;
    updateKeranjang();
}

// Update tampilan
function updateKeranjang() {
    const daftar = document.getElementById("daftarKeranjang");
    const totalText = document.getElementById("totalHarga");
    const jumlahItem = document.getElementById("jumlahItem");

    daftar.innerHTML = "";

    keranjang.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item.nama + " - " + formatRupiah(item.harga);

        const hapusBtn = document.createElement("button");
        hapusBtn.textContent = " ❌";
        hapusBtn.style.marginLeft = "10px";
        hapusBtn.onclick = function() {
            hapusItem(index);
        };

        li.appendChild(hapusBtn);
        daftar.appendChild(li);
    });

    totalText.textContent = "Total: " + formatRupiah(total);
    jumlahItem.textContent = keranjang.length;
}

// Hapus item
function hapusItem(index) {
    total -= keranjang[index].harga;
    keranjang.splice(index, 1);
    updateKeranjang();
}

// Checkout
function checkout() {
    if (keranjang.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    alert("Terima kasih sudah membeli 🥤\nTotal bayar: " + formatRupiah(total));

    keranjang = [];
    total = 0;
    updateKeranjang();
}

// Kosongkan semua
function kosongkan() {
    keranjang = [];
    total = 0;
    updateKeranjang();
}
function checkout() {
    if (keranjang.length === 0) {
        alert("Keranjang kosong!");
        return;
    }

    let nomorWA = "6289521317153"; // ganti nomor kamu

    let pesan = "Halo, saya mau pesan:\n";

    keranjang.forEach((item, index) => {
        pesan += `${index + 1}. ${item.nama} - Rp${item.harga}\n`;
    });

    pesan += `\nTotal: Rp${total}`;

    let url = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
}