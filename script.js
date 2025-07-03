const handleLoad=()=>{
    location.assign("http://127.0.0.1:3000/register.html")
}


let handleRegister=()=>{

    let username=document.getElementById("username").value
    let mob=document.getElementById("mob").value
    let password=document.getElementById("password").value
    let confirm_password=document.getElementById("confirm_password").value

    let user_details={
        name:username,
        mobile:mob,
        password:password
    }

    // json

    user_details=JSON.stringify(user_details)

    if (password===confirm_password){
        window.localStorage.setItem("user1",user_details)
        alert("user registered successfully")
        location.assign("http://127.0.0.1:3000/login.html")

    }
    else{
        alert("password do not match")
    }
}

function handleLogin(){
    let user_name=document.getElementById("user_name").value
    let user_password=document.getElementById("user_password").value

    // console.log(handleLogin)
    let reg_user=window.localStorage.getItem("user1")
    reg_user=JSON.parse(reg_user)
    // console.log(reg_user);

    if(user_name==reg_user.name && user_password===reg_user.password){
        alert("login Successful")
        location.assign("http://127.0.0.1:3000/homepage.html")
    }
    else{
        alert("invalid User")
    }
}