function ResponsiveCaptcha() {
    ClassName = "h-captcha"
    captchaWidth = 303
    catpchaHeight = 78

    cap = document.getElementsByClassName(ClassName)[0]
    cap.style.display = "none"
    formWidth = cap.parentElement.clientWidth

    scale = formWidth / captchaWidth
    marginWidth = (captchaWidth - formWidth) / 2
    marginHeight = ((catpchaHeight * scale) - catpchaHeight) / 2

    cap.style.transform = "scale(" + scale + ")"
    cap.style.marginLeft = "-" + marginWidth + "px"
    cap.style.marginRight = "-" + marginWidth + "px"
    cap.style.marginTop = marginHeight + "px"
    cap.style.marginBottom = marginHeight + "px"

    cap.style.justifyContent = "center"
    cap.style.display = "flex"
}


document.addEventListener('DOMContentLoaded', ResponsiveCaptcha)
window.addEventListener("resize", ResponsiveCaptcha)
