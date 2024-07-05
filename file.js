let navbar = document.querySelector("body")
let main = document.createElement("div")
navbar.appendChild(main)

let head = document.createElement("div")
main.style.maxWidth = "85%"
main.style.display = "flex"
main.style.padding = "20px"
main.style.justifyContent = "space-between"
main.appendChild(head)

let image = document.createElement("img") 
image.setAttribute("src","Logo (6).png")
image.style.paddingLeft = "70px"
image.style.paddingTop = "10px"
image.style.width = "70%"
head.appendChild(image)


let links = document.createElement("div")
links.style.fontSize = "20px"
links.style.display ="flex"
links.style.gap ="40px"
main.appendChild(links)

let link = document.createElement("a")
link.innerHTML = " Home"
links.appendChild(link)


let link2 = document.createElement("a")
link2.innerHTML = " Features"
links.appendChild(link2)


let link3 = document.createElement("a")
link3.innerHTML = " Blog"
links.appendChild(link3)


let link4 = document.createElement("a")
link4.innerHTML = " Contact"
links.appendChild(link4)



let link5 = document.createElement("a")
link5.innerHTML = " About Us"
links.appendChild(link5)

let herodiv = document.createElement("div")
herodiv.style.maxWidth = "90%"
herodiv.style.display = "flex"
navbar.appendChild(herodiv)


let hero = document.createElement("div")
hero.style.maxWidth = "50%"
hero.innerHTML = "Beasiswa Pelatihan untuk Perempuan Indonesia"
hero.style.fontSize = "60px"
hero.style.paddingLeft = "90px"
hero.style.paddingTop = "45px"
herodiv.appendChild(hero)


let pera = document.createElement("div")
pera.style.maxWidth = "80%"
pera.innerHTML = "Mendobrak Batasan, Meraih Impian, Program Beasiswa Pelatihan Digital untuk Menggali Potensi Perempuan Indonesia"
pera.style.fontSize = "18px"
pera.style.paddingLeft = "8px"
pera.style.paddingTop = "20px"
pera.style.color = "#7E7E7E"
hero.appendChild(pera)


let main3 = document.createElement("div")
main3.style.maxWidth = "55%"
main3.style.display = "flex"
main3.style.justifyContent = "space-between"
hero.appendChild(main3)

let btn = document.createElement("a")
btn.style.marginLeft = "5px"
btn.style.marginTop = "30px"
btn.innerHTML = "Get Started"
btn.style.border = "1px solid #FAE23A"
btn.style.backgroundColor = "#FAE23A"
btn.style.borderEndEndRadius = "10px"
btn.style.borderStartStartRadius = "10px"
btn.style.borderStartEndRadius = "10px"
btn.style.boxShadow = "1px 12px 19px 1px gray"
btn.style.fontSize = "20px"
btn.style.padding = "7px"
btn.style.paddingLeft = "40px"
btn.style.paddingRight = "40px"
main3.appendChild(btn)


let anger = document.createElement("div")
anger.innerHTML  = "Learn More"
anger.style.paddingTop = "35px"
anger.style.fontSize = "18px"
main3.appendChild(anger)


let hero2 = document.createElement("div")
hero2.style.maxWidth = "100%"
hero2.style.display = "flex"
hero2.style.marginTop = "30px"
herodiv.appendChild(hero2)

let imagediv = document.createElement("div")
imagediv.style.maxWidth = "45%"
hero2.appendChild(imagediv)

let image2 = document.createElement("img")
image2.setAttribute('src', 'Frame 11 (1).png')
imagediv.appendChild(image2)


let image3 = document.createElement("img")
image3.setAttribute('src', 'Frame 13 (2).png')
image3.style.paddingTop = "10px"
imagediv.appendChild(image3)


let imagediv2 = document.createElement("div")
imagediv2.style.maxWidth = "50%"
imagediv2.style.marginLeft = "20px"
hero2.appendChild(imagediv2)

let image4 = document.createElement("img")
image4.setAttribute('src', 'Frame 14 (1).png')
imagediv2.appendChild(image4)

let image5 = document.createElement("img")
image5.setAttribute('src', 'Frame 12 (1).png')
image5.style.paddingTop = "10px"
imagediv2.appendChild(image5)


let imagediv3 = document.createElement("div")
imagediv3.style.maxWidth = "45%"
imagediv3.style.marginLeft = "20px"
hero2.appendChild(imagediv3)

let image6 = document.createElement("img")
image6.setAttribute('src', 'Frame 10 (1).png')
image6.style.paddingTop = "90px"
imagediv3.appendChild(image6)


let icondiv = document.createElement("div")
icondiv.style.width = "65%"
icondiv.style.marginTop = "80px"
icondiv.style.display = "flex"
icondiv.style.justifyContent = "space-between"
hero.appendChild(icondiv)

let cont = document.createElement("div")
cont.style.display = "flex"
cont.style.justifyContent = "space-between"
cont.style.maxWidth = "18%"
icondiv.appendChild(cont)

let fan = document.createElement("img")
fan.setAttribute('src','Frame 3 (3).png')
cont.appendChild(fan)

let fanpera = document.createElement("div")
fanpera.innerHTML = "Build Community"
fanpera.style.width = "15%"
fanpera.style.fontSize = "15px"
cont.appendChild(fanpera)


let cont2 = document.createElement("div")
cont2.style.display = "flex"
cont2.style.justifyContent = "space-between"
cont2.style.maxWidth = "18%"
icondiv.appendChild(cont2)

let fan2 = document.createElement("img")
fan2.setAttribute('src','Frame 3 (4).png')
cont2.appendChild(fan2)

let fanpera2 = document.createElement("div")
fanpera2.innerHTML = "Share Events"
fanpera2.style.width = "15%"
fanpera2.style.fontSize = "15px"
cont2.appendChild(fanpera2)



let cont3 = document.createElement("div")
cont3.style.display = "flex"
cont3.style.justifyContent = "space-between"
cont3.style.maxWidth = "18%"
icondiv.appendChild(cont3)

let fan3 = document.createElement("img")
fan3.setAttribute('src','Frame 3 (5).png')
cont3.appendChild(fan3)

let fanpera3 = document.createElement("div")
fanpera3.innerHTML = "Get  Information"
fanpera3.style.width = "15%"
fanpera3.style.fontSize = "15px"
cont3.appendChild(fanpera3)







