function CaptchaResponsivo() {
    document.getElementById("hcap").style.display = "none"
    formWidth = document.getElementsByClassName("h-captcha")[0].parentElement.clientWidth
    captchaWidth = 303
    catpchaHeight = 78

    scale = formWidth / captchaWidth
    marginWidth = (captchaWidth - formWidth) / 2
    marginHeight = ((catpchaHeight * scale) - catpchaHeight) / 2


    document.getElementById("hcap").style.transform = "scale(" + scale + ")"
    document.getElementById("hcap").style.marginLeft = "-" + marginWidth + "px"
    document.getElementById("hcap").style.marginRight = "-" + marginWidth + "px"
    document.getElementById("hcap").style.marginTop = marginHeight + "px"
    document.getElementById("hcap").style.marginBottom = marginHeight + "px"


    document.getElementById("hcap").style.justifyContent = "center"
    document.getElementById("hcap").style.display = "flex"
}


document.addEventListener('DOMContentLoaded', CaptchaResponsivo)
window.addEventListener("resize", CaptchaResponsivo)
