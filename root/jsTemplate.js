function data(){
    let name=document.createElement("h2")
    let rollno=document.createElement("h2")
    let uni=document.createElement("h2")
    let date=document.createElement("h2")

    name.innerText="Kartik Kumar"
    rollno.innerText="201550068"
    uni.innerText="GLA University,Mathura"
    var today=new Date()
    date.innerText=`${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`

    document.querySelector("footer").appendChild(name)
    document.querySelector("footer").appendChild(rollno)
    document.querySelector("footer").appendChild(uni)
    document.querySelector("footer").appendChild(date)
}
data()