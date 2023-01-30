const rbtn = document.getElementById('turn-right');
const lbtn = document.getElementById('turn-left');
const dbtn = document.getElementById('down-btn');
let ss = false;

rbtn.onclick = ()=>{
    window.scroll(2000, 0)
}

lbtn.onclick = ()=>{
    window.scroll(0, 0)
}

dbtn.onclick = ()=>{
    if (!ss) {
        window.scrollTo({top:1000})
        ss = true
        dbtn.style.transform = "rotate(180deg)"
        dbtn.style.top = "0"
    } else {
        window.scrollTo({top:0})
        ss = false
        dbtn.style.transform = ""
        dbtn.style.top = ""
    }
}
