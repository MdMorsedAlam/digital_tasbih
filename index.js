// ---------Alhamdolillah Incriment-----
const alhamdoCount=document.getElementById("alhamdo-count");
const alhamdoString=alhamdoCount.innerText;
let alhamdoValue=parseFloat(alhamdoString);
document.querySelector("#alhamdo-inc").addEventListener("click",function(){
if(alhamdoValue===33){
    return alert("You Have Finished 33 Please Go To Next");  
}document.getElementById("alhamdo-count").innerText=alhamdoValue+=1;   
})
// ---------Alhamdolillah Decriment-----
document.querySelector("#alhamdo-dec").addEventListener("click",function(){
    if(alhamdoValue<=0){
        return alert("Your Count Is Under 0 Please The Incriment Button"); 
    }document.getElementById("alhamdo-count").innerText=alhamdoValue-=1;
        
    })
    // ---------Allaho Akbar Incriment-----
const allahoCount=document.getElementById("allaho-count");
const allahoString=allahoCount.innerText;
let allahoValue=parseFloat(allahoString);
document.querySelector("#allaho-inc").addEventListener("click",function(){
if(allahoValue===33){
    return alert("You Have Finished 33 Please Go To Next"); 
}document.getElementById("allaho-count").innerText=allahoValue+=1;   
})
    // ---------Allaho Akbar Decriment-----
    document.querySelector("#allaho-dec").addEventListener("click",function(){
        if(allahoValue<=0){       
            return alert("Your Count Is Under 0 Please The Incriment Button");
        }
        document.getElementById("allaho-count").innerText=allahoValue-=1;
            
        })
            // ---------Subahan Allah Incriment-----
const subahanCount=document.getElementById("subahan-count");
const subahanString=subahanCount.innerText;
let subahanValue=parseFloat(subahanString);
document.querySelector("#subahan-inc").addEventListener("click",function(){
    
if(subahanValue===34){
    return alert("You Have Finished 34 Please Go Again");  
} 
document.getElementById("subahan-count").innerText=subahanValue+=1;  
})
    // ---------Allaho Akbar Decriment-----
    document.querySelector("#subahan-dec").addEventListener("click",function(){
        
        if(subahanValue<=0){
             return alert("Your Count Is Under 0 Please The Incriment Button");
        }
        document.getElementById("subahan-count").innerText=subahanValue-=1;
            
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