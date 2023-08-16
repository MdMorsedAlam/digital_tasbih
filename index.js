const alhamdoCount=document.getElementById("alhamdo-count");
const alhamdoString=alhamdoCount.innerText;
let alhamdoValue=parseFloat(alhamdoString);
document.querySelector("#alhamdo-inc").addEventListener("click",function(){
if(alhamdoValue<=33){
    document.getElementById("alhamdo-count").innerText=alhamdoValue++;
}else{
    return alert("Hello 33");
}
    
})
document.querySelector("#alhamdo-dec").addEventListener("click",function(){
    if(alhamdoValue>=0){
        document.getElementById("alhamdo-count").innerText=alhamdoValue--;
    }else{
        return alert("Can't Do It");
    }
        
    })