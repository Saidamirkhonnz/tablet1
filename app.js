let box = document. querySelector (' .box')
let amount = 696
for (let i = 0; i < amount;i++) {
let item =
document. createElement ('div')
item. classList. add ('item' )
box. append (item)
item. addEventListener ('mouseover',() => setColor (item) )
item. addEventListener ('mouseleave', () => removecolor (item) )
}
function setColor (el) {
let box = '0123456789ABCDEF'
let color = '#'
for (let i = 0; i < 6; i++) {
color += box[Math. floor (Math. random () * 16)]
el. style. background = color
}
return color
}
function removecolor  (el) {
el.style.background = ''
}