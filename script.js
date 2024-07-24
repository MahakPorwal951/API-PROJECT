let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");

 btn1.addEventListener("click",async()=>{
         let fact= await getFact();
    console.log(result1);

     let p=document.querySelector("#result1");
    p.innerText=fact;
 });
let url="https://catfact.ninja/fact";
 
    async function getFact(){
    try{
    let res= await axios.get(url);
    return res.data.fact;
    }
    catch(e){
     console.log("error",e);
     return "Error found";
    }
}

btn2.addEventListener("click",async()=>{
    let res= await image();
    console.log(res)

    let p=document.querySelector("#result2");
    p.setAttribute("src",res);
})
let url2="https://dog.ceo/api/breeds/image/random";
 
    async function image(){
    try{
    let res= await axios.get(url2);
    return res.data.message;
    }
    catch(e){
     console.log("error",e);
     return "Error found";
    }
    
}




