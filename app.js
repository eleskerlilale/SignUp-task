const form=document.querySelector(".category-form")
const nameinput=document.querySelector("#name")
const email=document.querySelector("#email")
const passwords=document.querySelectorAll("input[type='password']")
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
for(let i in input){
    input[i].addEventListener("input", () => {
        if(i==0){
            symbols[i].innerHTML=`<i class="bi bi-plus-circle"></i>`
            symbols[i].style.color='rgb(55, 255, 0)'
        }
        else if(i==1){
            
            if(input[i].value.endsWith('@gmail.com')){
                symbols[i].innerHTML=`<i class="bi bi-plus-circle"></i>`
                symbols[i].style.color='rgb(55, 255, 0)'
            }else{
                symbols[i].innerHTML=`<p>Include @gmail.com at the end</p>`
                symbols[i].style.color='gray'
            }
        }
    })
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

for (let i in hidden){
    hidden[i].addEventListener("click" ,() => {
        if(passwords[i].type==='text'){
            passwords[i].type='password'
            hidden[i].innerHTML=`<i class="bi bi-eye-slash"></i>`
        }else{
            passwords[i].type='text'
            hidden[i].innerHTML=`<i class="bi bi-eye"></i>`
        }
    })
}

const arr=[]
submit.addEventListener('click', (e) => {
    e.preventDefault()
    arr.push(obj)
    console.log(arr)
})

