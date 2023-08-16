// ---------Alhamdolillah Incriment-----
const alhamdoCount=document.getElementById("alhamdo-count");
const alhamdoString=alhamdoCount.innerText;
let alhamdoValue=parseFloat(alhamdoString);
let alhamdoResult=1;
document.querySelector("#alhamdo-inc").addEventListener("click",function(){
if(alhamdoResult<=33){
    document.getElementById("alhamdo-count").innerText=alhamdoResult++;
}else{
    return alert("You Have Finished 33 Please Go To Next");
}   
})
// ---------Alhamdolillah Decriment-----
document.querySelector("#alhamdo-dec").addEventListener("click",function(){
    if(alhamdoResult>=0){
        document.getElementById("alhamdo-count").innerText=alhamdoResult--;
    }else{
        return alert("Your Count Is Under 0 Please The Incriment Button");
    }
        
    })
    // ---------Allaho Akbar Incriment-----
const allahoCount=document.getElementById("allaho-count");
const allahoString=allahoCount.innerText;
let allahoValue=parseFloat(allahoString);
let allahoResult=1;
document.querySelector("#allaho-inc").addEventListener("click",function(){
if(allahoResult<=33){
    document.getElementById("allaho-count").innerText=allahoResult++;
}else{
    return alert("You Have Finished 33 Please Go To Next");
}   
})
    // ---------Allaho Akbar Decriment-----
    document.querySelector("#allaho-dec").addEventListener("click",function(){
        if(allahoResult>=0){
            document.getElementById("allaho-count").innerText=allahoResult--;
        }else{
            return alert("Your Count Is Under 0 Please The Incriment Button");
        }
            
        })
            // ---------Subahan Allah Incriment-----
const subahanCount=document.getElementById("subahan-count");
const subahanString=subahanCount.innerText;
let subahanValue=parseFloat(subahanString);
let subahanResult=1;
document.querySelector("#subahan-inc").addEventListener("click",function(){
if(subahanResult<=34){
    
    document.getElementById("subahan-count").innerText=subahanResult++;;
}else{
    return alert("You Have Finished 34 Please Go Again");
}   
})
    // ---------Allaho Akbar Decriment-----
    document.querySelector("#subahan-dec").addEventListener("click",function(){
        if(subahanResult>=0){
            document.getElementById("subahan-count").innerText=subahanResult--;
        }else{
            return alert("Your Count Is Under 0 Please The Incriment Button");
        }
            
        })
        // --------Reset Button-------
        document.getElementById("reset-btn").addEventListener("click",function(){
            // -------Alhamdo Lillah-----------
            document.getElementById("alhamdo-count").innerText=0;
            alhamdoValue=0;
            // ----------Allaho Akbar----------
            document.getElementById("allaho-count").innerText=0;
            allahoValue=0;
            // --------Subahan Allah-----------
            document.getElementById("subahan-count").innerText=0;
            subahanValue=0;
        })