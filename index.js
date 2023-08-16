// ---------Alhamdolillah Incriment-----
const alhamdoCount=document.getElementById("alhamdo-count");
const alhamdoString=alhamdoCount.innerText;
let alhamdoValue=parseFloat(alhamdoString);
document.querySelector("#alhamdo-inc").addEventListener("click",function(){
if(alhamdoValue<=33){
    document.getElementById("alhamdo-count").innerText=alhamdoValue++;
}else{
    return alert("You Have Finished 33 Please Go To Next");
}   
})
// ---------Alhamdolillah Decriment-----
document.querySelector("#alhamdo-dec").addEventListener("click",function(){
    if(alhamdoValue>=0){
        document.getElementById("alhamdo-count").innerText=alhamdoValue--;
    }else{
        return alert("Your Count Is Under 0 Please The Incriment Button");
    }
        
    })
    // ---------Allaho Akbar Incriment-----
const allahoCount=document.getElementById("allaho-count");
const allahoString=allahoCount.innerText;
let allahoValue=parseFloat(allahoString);
document.querySelector("#allaho-inc").addEventListener("click",function(){
if(allahoValue<=33){
    document.getElementById("allaho-count").innerText=allahoValue++;
}else{
    return alert("You Have Finished 33 Please Go To Next");
}   
})
    // ---------Allaho Akbar Decriment-----
    document.querySelector("#allaho-dec").addEventListener("click",function(){
        if(allahoValue>=0){
            document.getElementById("allaho-count").innerText=allahoValue--;
        }else{
            return alert("Your Count Is Under 0 Please The Incriment Button");
        }
            
        })
            // ---------Subahan Allah Incriment-----
const subahanCount=document.getElementById("subahan-count");
const subahanString=subahanCount.innerText;
let subahanValue=parseFloat(subahanString);
document.querySelector("#subahan-inc").addEventListener("click",function(){
if(subahanValue<=34){
    document.getElementById("subahan-count").innerText=subahanValue++;
}else{
    return alert("You Have Finished 34 Please Go Again");
}   
})
    // ---------Allaho Akbar Decriment-----
    document.querySelector("#subahan-dec").addEventListener("click",function(){
        if(subahanValue>=0){
            document.getElementById("subahan-count").innerText=subahanValue--;
        }else{
            return alert("Your Count Is Under 0 Please The Incriment Button");
        }
            
        })