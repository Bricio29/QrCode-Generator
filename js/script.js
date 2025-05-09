const btnGerar = document.querySelector("#gerar-qr")
const box = document.querySelector(".box")
const divQrCode = document.querySelector(".qr-code")

function gerarCodigoQr() {
  const campoQr = document.querySelector("#campo-qr").value.trim()
  box.innerHTML = ""

  if (campoQr !== "") {
    new QRCode(box, {
      text: campoQr,
      width: 300,
      height: 300,
      render: "canvas",
    })

    divQrCode.classList.remove("display-hidden")

    setTimeout(() => {
      const canvas = box.querySelector("canvas")
      const download = document.querySelector("#download")

      if (canvas) {
        download.href = canvas.toDataURL("image/png")
        download.download = "qrcode.png"
      }
    }, 300)
  } else {
    divQrCode.classList.add("display-hidden")
    alert("Campo vazio!")
  }
}

btnGerar.addEventListener("click", gerarCodigoQr)
