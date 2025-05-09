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
    })

    divQrCode.classList.remove("display-hidden")

    setTimeout(() => {
      const img = box.querySelector("img")
      const canvas = box.querySelector("canvas") // Verificando canvas também
      const download = document.querySelector("#download")

      if (img) {
        download.href = img.src // Caso seja uma imagem
      } else if (canvas) {
        download.href = canvas.toDataURL("image/png") // Caso seja um canvas
      }
    }, 300)
  } else {
    divQrCode.classList.add("display-hidden")
    alert("Campo vazio!")
  }
}

btnGerar.addEventListener("click", gerarCodigoQr)
