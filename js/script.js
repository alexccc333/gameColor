var gameBorder=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
var status=1;
var id1;
var id2;
var blockColor;
let m=0;
let countColor=0;
var gameColor= [
        'class="blue game-block" data-i="1"',
        'class="yellow game-block" data-i="2"',
        'class="green game-block" data-i="3"',
        'class="black game-block" data-i="4"',
        'class="orange game-block" data-i="5"',
        'class="red game-block" data-i="6"',
        'class="aqua game-block" data-i="7"',
        'class="blueviolet game-block" data-i="8"',
        'class="blue game-block" data-i="1"',
        'class="yellow game-block"data-i="2"',
        'class="green game-block" data-i="3"',
        'class="black game-block" data-i="4"',
        'class="orange game-block" data-i="5"',
        'class="red game-block" data-i="6"',
        'class="aqua game-block" data-i="7"',
        'class="blueviolet game-block " data-i="8"'];
function draw() {
    let m=0;
    let out='';
    let styleClass=shuffle(gameColor);
        for (let i=0;i<gameBorder.length;i++){
            let arr=gameBorder[i];
            for (let k=0;k<arr.length;k++){
                out+=`<div ${styleClass[m]} data-x="${k}" data-y="${i}" data-m="${m}" ></div>`;
                m++;
            }

        }

    document.querySelector('#lbl').innerHTML=out;
    document.querySelectorAll('.red,.blue,.yellow,.green,.black,.orange,.aqua,.blueviolet,.none-active').forEach(function (element) {
      element.onclick=gameStart;

    })
    document.querySelectorAll('.red,.blue,.yellow,.green,.black,.orange,.aqua,.blueviolet').forEach(function (element) {

        element.classList.add('white')
    })
    for (let i=0;i<gameBorder.length;i++){
        let arr=gameBorder[i];
        for (let k=0;k<arr.length;k++){
            out+=`<div ${styleClass[m]} data-x="${k}" data-y="${i}" data-m="${m}" ></div>`;
            m++;
        }
    }
}

function gameStart(){

    let x=this.dataset.x;
    let y=this.dataset.y;
    let i=this.dataset.i;
    document.querySelector(`.game-block[data-x="${+x}"][data-y="${+y}"]`).classList.remove('white');
    logicGame(x, y, i);
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
 function logicGame(pos1,pos2,color) {
     if (this.status == 1) {
         this.id1 = pos1;
         this.id2 = pos2;
         this.blockColor = color;
         console.log(this.id1+this.id2+this.blockColor);
         console.log(this.status);
         this.status =2;
         console.log(this.status);
         return;
     }
     if (this.status == 2) {
         console.log(pos1 + pos2 + color)
         if (this.blockColor==color){

                 document.querySelector(`.game-block[data-x="${pos1}"][data-y="${pos2}"]`).classList.remove('white');
                 document.querySelector(`.game-block[data-x="${this.id1}"][data-y="${this.id2}"]`).classList.remove('white');
                 countColor++;
                 console.log(countColor);
                 if (countColor==8)
                 {
                     setTimeout(()=>{
                         alert("end game"+readout);
                     },1000);


                 }
         }
     else {
             setTimeout(function () {
                 document.querySelector(`.game-block[data-x="${pos1}"][data-y="${pos2}"]`).classList.add('white');
                 document.querySelector(`.game-block[data-x="${this.id1}"][data-y="${this.id2}"]`).classList.add('white');
             }, 500);
         }
         console.log(this.status);
         this.status = 1;
     }

 }
 function GamingStart(){
     StartStop();
     draw();
 }

//объявляем переменные
var base = 60;
var clocktimer, dateObj, dh, dm, ds, ms ,md;
var readout = '';
var h = 1,
    md = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    init = 0;
//функция для очистки поля
function ClearСlock() {
    clearTimeout(clocktimer);
    h = 1;
    md = 1;
    tm = 1;
    s = 0;
    ts = 0;
    ms = 0;
    init = 0;
    readout = '00:00:00';
    document.MyForm.stopwatch.value = readout;
}

//функция для старта секундомера
function StartTIME() {
    var cdateObj = new Date();
    var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    if (t > 999) {
        s++;
    }
    if (s >= (md * base)) {
        ts = 0;
        md++;
    } else {
        ts = parseInt((ms / 100) + s);
        if (ts >= base) {
            ts = ts - ((md - 1) * base);
        }
    }
    if (md > (h * base)) {
        tm = 1;
        h++;
    } else {
        tm = parseInt((ms / 100) + md);
        if (tm >= base) {
            tm = tm - ((h - 1) * base);
        }
    }
    ms = Math.round(t / 10);
    if (ms > 99) {
        ms = 0;
    }
    if (ms == 0) {
        ms = '00';
    }
    if (ms > 0 && ms <= 9) {
        ms = '0' + ms;
    }
    if (ts > 0) {
        ds = ts;
        if (ts < 10) {
            ds = '0' + ts;
        }
    } else {
        ds = '00';
    }
    dm = tm - 1;
    if (dm > 0) {
        if (dm < 10) {
            dm = '0' + dm;
        }
    } else {
        dm = '00';
    }
    dh = h - 1;
    if (dh > 0) {
        if (dh < 10) {
            dh = '0' + dh;
        }
    } else {
        dh = '00';
    }
    readout = dm + ':' + ds + ':' + ms;
    document.MyForm.stopwatch.value = readout;
    clocktimer = setTimeout("StartTIME()", 1);
}

//Функция запуска и остановки
function StartStop() {
    if (init == 0) {
        ClearСlock();
        dateObj = new Date();
        StartTIME();
        init = 1;
    } else {
        clearTimeout(clocktimer);
        init = 0;
    }
}