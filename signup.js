window.addEventListener('load',function(){
	var form = document.querySelector('form')
	form.addEventListener("submit" ,handleForm)
	form.addEventListener("keypress", clearMsgBox)
})

function handleForm(){
	event.preventDefault()
	let formData = new FormData(event.target)
	let name = formData.get("name")
	let email = formData.get("email")
	let password = formData.get("password")
	let confirm_password = formData.get("confirm_password")
	console.log(checkSignupDetails(name,email,password,confirm_password))

	if(checkSignupDetails(name,email,password,confirm_password)){
		var user_obj = {
			name : name,
			email : email,
			password : password, 
			transactions : []  
		}
		arr.push(user_obj)
		saveData("users", arr)
		alert("Account created successfully")
		location = "./login.html"
	}
}

function checkSignupDetails(name,email,password,confirm_password){
	let flag = true
	if(name.length < 4){
			var name_msg = document.getElementById("name-msg")
			name_msg.innerHTML = "User name too short"
			flag = false
	}
	if(password.length < 6){
			var password_msg = document.getElementById("password-msg")
			password_msg.innerHTML = "Password too short"
			flag = false
	}
	if(password !== confirm_password){
		document.getElementById("confirm_password-msg").innerHTML = "Passwords do not match"
		flag = false
	}
	if(arr.length != 0){
		for(let i = 0; i < arr.length; i++){
			if(arr[i].email == email){
				document.getElementById("validation-msg").innerHTML = "Account already exists"
				flag = false
			}
		}
	}
	return flag
}

function clearMsgBox(){
	document.getElementById("name-msg").innerHTML = "&nbsp;"
	document.getElementById("password-msg").innerHTML = "&nbsp;"
	document.getElementById("confirm_password-msg").innerHTML = "&nbsp;"
	document.getElementById("validation-msg").innerHTML = "&nbsp;"
}