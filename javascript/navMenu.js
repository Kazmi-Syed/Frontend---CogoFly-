var disp = true;
        
const displayMenu=()=>{
    disp = !disp
    if(disp==false && window.innerWidth <= 886){
        document.getElementById('meni').style.display= 'flex';
        document.getElementById('ham').style.background = 'grey';
    }
    else{
        document.getElementById('ham').style.background = '';
        document.getElementById('meni').style.display= 'none'    
    }
}    