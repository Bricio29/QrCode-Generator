const btnGerar = document.querySelector("#gerar-qr")
const box = document.querySelector(".box")
const divQrCode = document.querySelector(".qr-code")

function gerarCodigoQr() {
  const campoQr = document.querySelector("#campo-qr").value.trim()
  box.innerHTML = ""

  if (campoQr !== "") {
    new QRCode(box, {
      text: campoQr,
      width: 350,
      height: 350,
    })

    divQrCode.classList.remove("display-hidden")

    setTimeout(() => {
      const img = box.querySelector("img")
      const download = document.querySelector("#download")
      if (img) {
        download.href = img.src
      }
    }, 300)
  } else {
    divQrCode.classList.add("display-hidden")
    alert("Campo vazio!")
  }
}

btnGerar.addEventListener("click", gerarCodigoQr)
