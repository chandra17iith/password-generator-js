
function textUpdate(val){
  let output = document.getElementById('val');
  console.log(output);
  output.innerText = val;
}
let range =document.querySelector("#range");
let l=range.value;
range.addEventListener("input",()=>{
    l=range.value;
})

function generate(){
    const s="qwertyuiopasdfghjklzxcvbnm1234567890@#$&(){}[]/QWERTYUIOPASDFGHJKLZXCVBNM";
    let m=s.length;
    let pwd="";
    for(let i=0;i<l;i++){
        const p=Math.floor(Math.random()*m);
        pwd+=s[p];
    }
    console.log(pwd);
    document.querySelector(".pass").value=pwd;
}