const showServices = document.getElementById("show-services")
const servicesBlock = document.getElementById("services-block")
const showServicesResponsive = document.getElementById("show-services-responsive")
const servicesBlockResponsive = document.getElementById("services-block-responsive")
const showNavResponsive = document.getElementById("show-nav-responsive")
const wrapNavResponsive = document.getElementById("wrap-nav-responsive")
const bgNavResponsive = document.getElementById("bg-nav-responsive")
const closeNavResponsive = document.getElementById("close-nav-responsive")
let isShowNavResponsive = false
let isShowServiceResponsive = false
let isShowService = false

const checkShowServices = () => {
    if(isShowService){
        servicesBlock.classList.add("block")
        servicesBlock.classList.remove("hidden")
    } else {
        servicesBlock.classList.remove("block")
        servicesBlock.classList.add("hidden")
    }
}

const checkShowServicesRespon = () => {
    if(isShowServiceResponsive){
        servicesBlockResponsive.style.height = `${servicesBlockResponsive.scrollHeight}px`
    } else {
        servicesBlockResponsive.style.height = '0px'
    }
}

const checkShowNavRespon = () => {
    if(isShowNavResponsive){
        wrapNavResponsive.classList.add('translate-x-0')
        wrapNavResponsive.classList.remove('translate-x-80')
        bgNavResponsive.classList.remove('hidden')
        bgNavResponsive.classList.add('block')
    } else {
        wrapNavResponsive.classList.remove('translate-x-0')
        wrapNavResponsive.classList.add('translate-x-80')
        bgNavResponsive.classList.add('hidden')
        bgNavResponsive.classList.remove('block')
    }
}

showServices.addEventListener("mouseenter", () => {
    isShowService = true
    checkShowServices()
})

showServices.addEventListener("mouseleave", () => {
    isShowService = false
    checkShowServices()
})

showServicesResponsive.addEventListener('click', () => {
    isShowServiceResponsive = !isShowServiceResponsive
    checkShowServicesRespon()
})

showNavResponsive.addEventListener("click", () => {
    isShowNavResponsive = true
    checkShowNavRespon()
})
closeNavResponsive.addEventListener("click", () => {
    isShowNavResponsive = false
    checkShowNavRespon()
})
bgNavResponsive.addEventListener("click", () => {
    isShowNavResponsive = false
    checkShowNavRespon()
})