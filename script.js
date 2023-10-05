let box = document.createElement('div')
let w_space = document.createElement('div')
let b_space = document.createElement('div')
let img_space = document.createElement('img')
let h1 = document.createElement('h1')
let p = document.createElement('p')
let ul = document.createElement('ul')
let li1 = document.createElement('li')
let li2 = document.createElement('li')
let li3 = document.createElement('li')
let img1 = document.createElement('img')
let img2 = document.createElement('img')
let img3 = document.createElement('img')
let button = document.createElement('button')
let body = document.body

box.classList.add('box')
w_space.classList.add('w_space')
img_space.src = './vzdfvzd.png'
b_space.classList.add('b_space')
h1.innerHTML = 'MEN’S CLOTHING (120)'
p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in thepadded sleeve, your everyday'
ul.type = 'none'
li1.innerHTML = '109'
li2.innerHTML = '3.9'
li3.innerHTML = '120'
img1.src = './dollor.png'
img2.src = 'star.svg'
img3.src = './star.png'
button.innerHTML = 'В избранное'

body.append(box)
box.append(w_space, b_space)
w_space.append(img_space)
b_space.append(h1, p, ul, button)
ul.append(li1, li2, li3)
li1.prepend(img1)
li2.prepend(img2)
li3.prepend(img3)

