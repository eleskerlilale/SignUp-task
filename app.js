const form=document.querySelector(".category-form")
const nameinput=document.querySelector("#name")
const email=document.querySelector("#email")
const password1=document.querySelector("#password1")
const password2=document.querySelector("#password2")
const submit=document.querySelector("#submit")
const symbols=document.querySelectorAll(".symbol")
const hidden=document.querySelectorAll(".hidden")
const input=document.querySelectorAll("input")
let obj={
    name:"",
    email:"",
    password:""
}
for (let i=0; i< input.length; i++){
    input[i].addEventListener("blur" ,() => {
        if(input[i].value==''){
            symbols[i].innerHTML=`<i class="bi bi-x-circle"></i>`
            symbols[i].style.color='red'
        }else{
            symbols[i].innerHTML=`<i class="bi bi-plus-circle"></i>`
            symbols[i].style.color='rgb(55, 255, 0)'
            obj.name=input[0].value,
            obj.email=input[1].value
            if(password1.value==password2.value){
                obj.password=input[2].value
                console.log(symbols[3])
            }else{
                symbols[3].innerHTML=`<i class="bi bi-x-circle"></i><p>Password not confirmed</p>`
                symbols[3].style.color='red'
                console.log(symbols[3])
            }
        }
    })
}
const arr=[]
submit.addEventListener('click', (e) => {
    e.preventDefault()
    arr.push(obj)
    console.log(arr)
})