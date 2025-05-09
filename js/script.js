let btnGerar = document.querySelector("#gerar-qr")
let box = document.querySelector(".box")
let divQrCode = document.querySelector(".qr-code")

function gerarCodigoQr() {
	let campoQr = document.querySelector("#campo-qr").value

	box.innerHTML = ""

	if(campoQr.trim() != "") {
		var qrcode = new QRCode(box, {
		text: campoQr,
		width: 350,
		height: 350,
	});
		divQrCode.classList.add("display-hidden");

		setTimeout(() => {
		const img = box.querySelector("img")
		const download = document.querySelector("#download")

		download.href = img.src
		}, 300);

	}else {
		divQrCode.classList.remove("display-hidden");
		alert("Campo Vazio!")
	}
}

btnGerar.addEventListener("click", gerarCodigoQr)
