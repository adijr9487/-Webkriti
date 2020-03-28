var z=document.querySelectorAll(".e");
var i=0,i1=0;
var j=180,j1=180;

for(var i=0;i<4;i++)
{
  z[i].style.position='absolute';
}
setInterval(full,40);
function full()
{

  var x,y,x1,y1;
  x=6+13.5165*Math.cos(i*(Math.PI)/180);
  y=12+23.5165*Math.sin(i*(Math.PI)/180);
  x1=6+13.5165*Math.cos(j*(Math.PI)/180);
  y1=12+23.5165*Math.sin(j*(Math.PI)/180);
  z[0].style.top=y+'vh';
  z[0].style.left=x+'vw';
  z[1].style.top=y1+'vh';
  z[1].style.left=x1+'vw';
    i++;
    j++;
}
setInterval(full2,70);
function full2()
{

  var x,y,x1,y1;
  x=10+32.5165*Math.cos(i1*(Math.PI)/180);
  y=32+39.5165*Math.sin(i1*(Math.PI)/180);
  x1=10+32.5165*Math.cos(j1*(Math.PI)/180);
  y1=32+39.5165*Math.sin(j1*(Math.PI)/180);
  z[2].style.top=y+'vh';
  z[2].style.left=x+'vw';
  z[3].style.top=y1+'vh';
  z[3].style.left=x1+'vw';
    i1++;
    j1++;
}
var cnt=0,u;
var o=document.querySelector(".register");
var p=document.querySelector(".orbit.nucleus_circle")
z[2].addEventListener("click",()=>{
  for(var i=0;i<4;i++)
  {
    z[i].style.display='none';
  }
  document.querySelector(".orbit").style.display="none";
  
p.style.display="none";
u=setInterval(expand1,60)
o.style.display="block";  
});
function expand1()
{
  if(cnt>=1)
  {
  clearInterval(u);
  cnt=0;
  }
  else{
    cnt+=.05;
    o.style.opacity=cnt;
}
}
window.addEventListener("load",playvid);
function playvid()
{
   document.querySelector("video").style.display="inline-block";
   document.querySelector("video").play();                 
   document.querySelectorAll(".orbit")[0].style.display='inline-block';
  setTimeout(()=>{
    document.querySelector("video").style.display="none";
    document.querySelectorAll(".orbit")[0].style.display='inline-block';
    document.querySelectorAll(".orbit")[1].style.display='inline-block';
    document.querySelectorAll(".orbit")[2].style.display='inline-block';
    document.querySelectorAll(".orbit")[3].style.display='inline-block';
    for(var i=0;i<4;i++)
  {
    z[i].style.display='inline-block';
  }
 
  p.style.display="inline-block";
  },10000);
};
var cont=document.querySelector("#contact");
z[1].addEventListener('click',()=>
{
for(var i=0;i<4;i++)
{
  z[i].style.display='none';
}
document.querySelector(".orbit").style.display="none";
p.style.display="none";
document.querySelector(".social_media").style.display="none";
cont.style.display="block";
u=setInterval(expand2,60);
});
function expand2()
{
  if(cnt>=1)
  {
  clearInterval(u);
  cnt=0;
  }
  else{
    cnt+=.05;
    cont.style.opacity=cnt;
}
}
document.querySelector(".forgot").addEventListener("click",()=>{
  document.querySelector(".reg1").style.display="none"; 
  u=setInterval(expand3,60);
  function expand3()
  {
    if(cnt>=1)
    {
    clearInterval(u);
    cnt=0;
    }
    else{
      cnt+=.05;
      document.querySelector("#forgot_password").style.opacity=cnt;
  } 
}
 document.querySelector("#forgot_password").style.display="block";
})
// document.querySelector("#submit3").addEventListener("click",()=>{
//   document.querySelector("#forgot_password").style.display="none";
//   document.querySelector("#submit3").style.display="block";
// })
document.querySelector(".first").addEventListener("click",()=>{
  document.querySelector("#first_time_register").style.display="block";
  document.querySelector(".reg1").style.display="none";
  u=setInterval(expand4,60); 
  function expand4()
  {
    if(cnt>=1)
    {
    clearInterval(u);
    cnt=0;
    }
    else{
      cnt+=.05;
      document.querySelector(".first_time_register1").style.opacity=cnt;
  } 
}
  document.querySelector(".first_time_register1").style.display="block";
}
)
document.querySelector(".next1").addEventListener("click",()=>{
  document.querySelector(".first_time_register1").style.display="none";
  document.querySelector(".first_time_register2").style.display="block";
})
var event=document.querySelector(".Events");
z[0].addEventListener("click",()=>{
  for(var i=0;i<4;i++)
{
  z[i].style.display='none';
}
document.querySelectorAll(".orbit")[0].style.display="none";
document.querySelectorAll(".orbit")[2].style.display="none";
p.style.display="none";
document.querySelector(".social_media").style.display="none";
event.style.display="block";
u=setInterval(expand5,60); 
function expand5()
{
  if(cnt>=1)
  {
  clearInterval(u);
  cnt=0;
  }
  else{
    cnt+=.05;
    document.querySelector(".Events").style.opacity=cnt;
} 
}
});
var exp=document.querySelectorAll(".exploreb");
exp[1].addEventListener("click",()=>{
  document.querySelector(".arrow1").style.display="none";
  document.querySelector(".arrow2").style.display="none";
  document.querySelector(".event2").style.display="none";
  document.querySelector(".explore").style.display="block";
});
document.querySelector(".aboute").addEventListener("click",()=>{
  document.querySelector(".e_rules").style.display="none";
  document.querySelector(".e_register").style.display="none";
  document.querySelector(".e_about").style.display="block";
});
document.querySelector(".rege").addEventListener("click",()=>{
  document.querySelector(".e_rules").style.display="none";
  document.querySelector(".e_register").style.display="block";
  document.querySelector(".e_about").style.display="none";
});

document.querySelector(".rulese").addEventListener("click",()=>{
  document.querySelector(".e_rules").style.display="block";
  document.querySelector(".e_register").style.display="none";
  document.querySelector(".e_about").style.display="none";
});
var arro=2;
document.querySelector(".arrow1").addEventListener("click",()=>{
  document.querySelector(".event"+arro).style.display="none";
  if(arro>1)
  {
    arro--;
  }
  document.querySelector(".event"+arro).style.display="block";
})
document.querySelector(".arrow2").addEventListener("click",()=>{
  document.querySelector(".event"+arro).style.display="none";
  if(arro<3)
  {
    arro++;
  }
  document.querySelector(".event"+arro).style.display="block";
})
document.querySelector(".contim").addEventListener("click",()=>{
  for(var i=0;i<4;i++)
  {
    z[i].style.display='inline-block';
  }
  document.querySelector(".orbit").style.display="inline-block";
  p.style.display="inline-block";
  document.querySelector(".social_media").style.display="inline-block";
  cont.style.display="none";
  cont.style.opacity=0;
  cnt=0;
});
document.querySelector(".regim").addEventListener("click",()=>{
  for(var i=0;i<4;i++)
  {
    z[i].style.display='inline-block';
  }
  document.querySelector(".orbit").style.display="inline-block";
  
p.style.display="inline-block";
o.style.display="none";
o.style.opacity=0;
cnt=0;
});
document.querySelector(".evim").addEventListener("click",()=>{
  for(var i=0;i<4;i++)
  {
    z[i].style.display='inline-block';
  }
  document.querySelectorAll(".orbit")[0].style.display="inline-block";
  document.querySelectorAll(".orbit")[2].style.display="inline-block";
  p.style.display="inline-block";
  document.querySelector(".social_media").style.display="inline-block";
  event.style.display="none";
  event.style.opacity=0;
  cnt=0;
});
document.querySelector(".proim").addEventListener("click",()=>{                              //for profile
alert("hi");  
});