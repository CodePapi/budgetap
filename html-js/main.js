document.getElementById('addAmount').addEventListener('click', (()=>{
  document.getElementById('amountbudget').innerHTML=parseInt(document.getElementById('newAmount').value)+parseInt(document.getElementById('amountbudget').innerHTML)
  document.getElementById('newAmount').value=""
  
}))
let btn = document.getElementById('create')

let budget=document.getElementById('amountbudget').innerHTML

console.log(budget)
 
var count=0

let ev =()=>   btn.addEventListener('click', (()=>{ 
      
count = count+=1

console.log(count + " "+ count +"times")


     var node = document.createElement("LI");
     var div = document.createElement('DIV')
     var cost = document.createElement('DIV')

     let costValue=document.getElementById('cost').value
     if(costValue.trim()===""){
       return 0
     count= count+=0
      
     }
     
     document.getElementById('added').innerHTML="N "+costValue + " was added"
     /*
     else{
       return costValue}*/
let input=document.getElementById('input').value
let inputTitle=document.getElementById('input').value
let regex=/(<[A-Za-z0-9 . ]+>|)([A-Za-z0-9 .]{0,10})[A-Za-z0-9 .]*(<\/[A-Za-z0-9 .]+>|).*/
if(document.getElementById('input').value.length>10){
 input= input.replace(regex, '$1$2$3')
}
      div.appendChild(document.createTextNode(input))
    cost.appendChild(document.createTextNode(costValue))

// var textnode = document.createTextNode(div)
//var costnode = document.createTextNode(div2.innerHTML)
var time = new Date().getMinutes()+" :"+new Date().getHours() +"   " + new Date().getDate().toString() + " /" + new Date().getMonth()
// + " /" + new Date().getFullYear()
var creatTime = document.createElement('DIV')
creatTime.appendChild(document.createTextNode(time))

var  createListNumber=document.createElement('DIV')
createListNumber.appendChild(document.createTextNode(count))
createListNumber.className="SN"
creatTime.className="time"
div.className="div"
div.title=inputTitle
cost.className="cost cost"+count
cost.id=count
var button=document.createElement("BUTTON");
var delet = document.createTextNode('Delete')
button.appendChild(delet);
//var textnode = document.createTextNode(markup)
node.appendChild(createListNumber)
node.appendChild(creatTime)
node.appendChild(div);
node.appendChild(cost)
node.append(button)
node.className="test"
// button.className="buttonDelete"
document.getElementById("ul").appendChild(node);
//node.id=count
button.className='btndelete'

var innerHTML=[]
var divs = document.querySelectorAll('div .cost');
  for (var i = 0; i < divs.length; i++) {
      var id = divs[i].getAttribute('id');
      id;
      if(id.includes(id)){
        var ids = document.getElementById(id).innerHTML
       innerHTML.push(ids)

      
      }

      //
   
  }
  //console.log(innerHTML)
  var innerHTMLnumber=[]
  for(var str=0; str<innerHTML.length; str++){
   var num= parseInt(innerHTML[str])
    innerHTMLnumber.push(num)


   

  }

 


var sum=innerHTMLnumber.reduce((a, b)=>a+b, 0)


console.log(sum)
document.getElementById('show').innerHTML=sum

button.addEventListener('click', (()=>{
 var btnRemoved= button.parentElement.remove()

let sib=  button.previousElementSibling.innerHTML
console.log(sum)
var bParent = button.parentElement
console.log( bParent.previousElementSibling)
console.log(bParent)
//var newSum=sum-sib
//var arrSum =[sum, sib]
//console.log(arrSum)
   setTimeout(()=>{
   document.getElementById('show').innerHTML=sum
  // innerHTMLnumber.length
  
   }, 2000)
   setTimeout(()=>{
   document.getElementById('show').innerHTML="N "+sib + " has been deleted"
  // innerHTMLnumber.length
  
   }, 3000)

   setTimeout(()=>{
   document.getElementById('total').innerHTML=sum-sib
  // innerHTMLnumber.length
  
   }, 3000)
   setTimeout(()=>{
  // document.getElementById('total').innerHTML=" pls click the check button when you are done"
  // innerHTMLnumber.length
  
   }, 3000)
  

   document.getElementById('checkSum').addEventListener('click', (()=>{
    //innerHTMLnumber.push[0]
   if(sum> sib){
   var b= document.getElementById('total').innerHTML=sum-sib
   }
   else if(sum<sib){
    document.getElementById('total').innerHTML=sum
   }
  }))
  
}))

//let total =getElementById('total').innerHTML

document.getElementById('calculate').addEventListener('click', (()=>{

  let balance=parseInt(document.getElementById('amountbudget').innerHTML)-sum
  document.getElementById('balance').innerHTML=balance
}))

document.getElementById('total').innerHTML=sum

document.getElementById('input').value=""
document.getElementById('cost').value=""

  }))

  
//window.addEventListener('load', (()=>{document.getElementById('show').style.display="none"}))

//const checkSum=()=>
  document.getElementById('checkSum').addEventListener('click', (()=>{
    count+=1
   let sum= document.getElementById('show')
  sum.style.display="block"
sum= document.getElementById('show').innerHTML
console.log("clicked")
  })
  )
window.addEventListener('mouseup', (()=>{
document.getElementById('show').innerHTML="no value yet"
//console.log(ev())


}))

ev()



//console.log(show.innerHTML)

/*
document.getElementById('checkkCost').addEventListener("click", (()=>{
var test= document.querySelectorAll("div.cost")
//console.log(test)
var content=[]
for(var x=0; x<test.length; x++){
 var a= test[x].getAttribute('class')
// console.log(content.push(a))
document.querySelector('.cost')
console.log()
}
//console.log(test)
//console.log(test)
//console.log(content.push(test))
}))

/*
for (var i = 0; i < divs.length; i++) {
      var id = divs[i].getAttribute('id');
      id;
      if(id.includes(id)){
        var ids = document.getElementById(id).innerHTML
       innerHTML.push(ids)

      
      }

*/
