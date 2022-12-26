List = ["Apple" , "Bill" , "Bilal" , "Purple"]

const closeAllRec = ()=>{
    var x = document.getElementsByClassName("auto");    
    for(var i of x){
        i.style.display = "none";
    }
}

const recDep = (t , type , val)=>{
    RecommendedList = List.filter((item) => {return item.toLowerCase().includes(val.toLowerCase())})
    t.parentNode.children[2].style.display = "initial"
    var Str = ""
    RecommendedList.map(e=> Str += "<li onclick=\"selectDep(this.innerText)\">" + e +"</li>")
    
    t.parentNode.children[2].innerHTML ="<ul>" + Str + "</ul>"
}

const selectDep = (val)=>{
    var x = document.getElementById("dep");
    x.value = val;
    x.parentNode.children[2].style.display = "none"

}
const recDes = (t , type , val)=>{
    RecommendedList = List.filter((item) => {return item.toLowerCase().includes(val.toLowerCase())})
    t.parentNode.children[5].style.display = "initial"
    var Str = ""
    RecommendedList.map(e=> Str += "<li onclick=\"selectDes(this.innerText)\">" + e +"</li>")
    t.parentNode.children[5].innerHTML = "<ul>" + Str + "</ul>"
}

const selectDes = (val)=>{
    var x = document.getElementById("des");
    x.value = val;
    x.parentNode.children[5].style.display = "none"
}

var loadFill = function(event) {
    var image = event.target.parentNode.children[1]
    image.style.top = "0px";
    image.style.height = "79px";
    image.src =  URL.createObjectURL(event.target.files[0])
}


window.onload = ()=>{
    document.querySelector('#des').addEventListener('blur' , ()=>{setTimeout( closeAllRec , 130)})
    document.querySelector('#dep').addEventListener('blur' , ()=>{setTimeout( closeAllRec , 130)})
    document.querySelector('input[type=\'file\']').addEventListener('click' , ()=>{console.log("Happening")})
    }
