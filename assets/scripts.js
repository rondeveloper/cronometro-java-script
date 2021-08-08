let primerT = document.getElementById('box_1')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let lap = document.getElementById('lap')
let reset=document.getElementById('reset')
let min = 0
let seg = 0
let n = 0
let h = 0
let s = 0
let Iddinamico = 0
let Idlap = 0
let content_lap = document.getElementById('content_lap')
let ol = document.createElement('ol')
let interval
let hora2 = 0
let hora = ''
let ilap = ''
let idlist = 0
let Boolea = false
let boole = true
let sw_con_hora = false
let hrs=''
start.addEventListener('click', () => {
  boole=false
        switch(Boolea){
            case false: 
    interval = setInterval(() => {
        seg++
        ilap++
        hora = Formatear_cadena(seg)
        primerT.innerHTML = hora
        let span_cont = document.getElementById('span_cont_' + (Iddinamico - 1))
        lap = Formatear_cadena(ilap)
        let vuelta = document.getElementById('span_lap_' + (Idlap - 1))
        if (span_cont != null) {
            //console.log(span_cont)
            span_cont.innerHTML = hora
            vuelta.innerHTML = lap
        }
    }, 10)
        Boolea=true
        console.log(Boolea)
    break;
            case true:
    break;
    default:console.log('pedido') 
   
        
        }
})
stop.addEventListener('click', () => {
    clearInterval(interval)
    console.log('stop')
    console.log(h)
    Boolea=false
})
content_lap.style.paddingLeft='18px'

lap.addEventListener('click', () => {
    console.log(h)
    content_lap.scrollTop='10000'
    let li = document.createElement('li')
    let list = document.createElement('li')
        switch(boole){
            case false:
                if(sw_con_hora==false ){
                if (idlist == 0) {
                    list.innerHTML = ` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${lap} &nbsp;&nbsp;&nbsp; ${hora} `
                    ol.appendChild(list)
                }
                li.innerHTML = ` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span id='span_lap_${Idlap}'>${lap}</span> &nbsp;&nbsp;&nbsp; <span id='span_cont_${Iddinamico}'> ${hora}</span> `
                Iddinamico += 1
                Idlap += 1
                idlist += 1
                console.log(typeof(li))
                console.log('hello world')
                ol.appendChild(li)
            
                content_lap.appendChild(ol)
                ilap = 0
            }else{
                ol.style.fontSize='15px'
                console.log('hora')
                primerT.style.paddingLeft='0'
                box_1.style.fontsize='35px'
                if (idlist == 0) {
                    list.innerHTML = ` &nbsp; &nbsp; ${lap} &nbsp; &nbsp; &nbsp;${hora} `
                    ol.appendChild(list)
                }
                li.innerHTML = ` &nbsp; &nbsp; <span id='span_lap_${Idlap}'>${lap}</span> &nbsp; &nbsp; &nbsp;<span id='span_cont_${Iddinamico}'> ${hora}</span> `
                Iddinamico += 1
                Idlap += 1
                idlist += 1
                
                console.log('hors size')
                ol.appendChild(li)

                content_lap.appendChild(ol)
                ilap = 0
            }
    break
    case true:
        break
        default: console.log('lap esta con object')
        }
        console.log(hrs)
})
let Formatear_cadena = (seg) => {
    s = parseInt(seg / 100) % 60
    min = parseInt(seg / (100 * 60))%60
    h = parseInt(seg / (100 * 60)/60)
    n = seg % 100
       hrs = ''

    if (n < 10) {
        n = "0" + n
    }
    if (s < 10) {
        s = '0' + s
    }
    if (min < 10) {
        min = '0' + min
    }
    if (h < 10) {
        hrs = '0' + h
    }
    if(h>=10){
        hrs=h
    }
    if (h>0) {
        sw_con_hora = true
    }
    if(sw_con_hora==true){
            primerT.style.paddingLeft='0'
            box_1.style.fontSize='65px'
    }
    if(sw_con_hora==false){
    return min + ':' + s  +`<span class='nmilisegundos'>.${n}</span>`
    }else{
    return hrs + ':' + min + ':' + s +`<span class='nmilisegundos'>.${n}</span>`
    }
}
reset.addEventListener('click',()=>{
    sw_con_hora=false
    ol.style.fontSize='20px'
    primerT.style.paddingLeft='48px'
    seg=0  
    ilap=0
    boole=true
    clearInterval(interval)
    console.log('reset')
    if(h==0){
        primerT.innerHTML = `00:00<span class='nmilisegundos'>.00</span>
        `
        
    }else{
        primerT.innerHTML = '00:00:00.00'
        box_1.style.fontsize='50px'
    }
    
    // content_lap.innerHTML=''
    ol.innerHTML=''
    idlist=0
    Boolea=false
})