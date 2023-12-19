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
for(let i=0 ; i<input.length ; i++){
    input[i].addEventListener("input", () => {
        if(input[i].value.trim()!=''){
            if(i==0){
                input[i].style.outlineColor='green'
                symbols[0].innerHTML=`<i class="bi bi-plus-circle"></i>`
                symbols[0].style.color='rgb(55, 255, 0)'
            }
            else if(i==1){
                if(input[i].value.endsWith('@gmail.com')){
                    input[i].style.outlineColor='green'
                    symbols[i].innerHTML=`<i class="bi bi-plus-circle"></i>`
                    symbols[i].style.color='rgb(55, 255, 0)'
                }else{
                    input[i].style.outlineColor='red'
                    symbols[i].innerHTML=`<p>Include @gmail.com at the end</p>`
                    symbols[i].style.color='gray'
                }
            }else if(i==2 || i==3){
                if(password1.value==password2.value){
                    obj.password=input[2].value
                    console.log(symbols[3])
                }else{
                    symbols[3].innerHTML=`<i class="bi bi-x-circle"></i><p>Password not confirmed</p>`
                    symbols[3].style.color='red'
                    console.log(symbols[3])
                }
            }
        }
        else{
            input[i].style.outlineColor='red'
            symbols[i].innerHTML=`<i class="bi bi-x-circle"></i>`
            symbols[i].style.color='red'
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

for (let i=0; i<hidden.length; i++){
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

submit.addEventListener('click', (e) => {
    e.preventDefault()
    axios.get("http://localhost:3000/main")
    .then(res => res.data)
    .then(data => {
        if(data.length ==0){
            axios.post("http://localhost:3000/main", obj)
        }else{
            data.forEach(element => {
                if(element.email==obj.email){
                    alert("eyni melumat")
                }else{
                    axios.post("http://localhost:3000/main", obj)
                    alert("ugurlu")
                }
            })
        }
    })
})

