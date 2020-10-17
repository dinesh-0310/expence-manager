window.addEventListener('load',function(){
	var form = document.querySelector('form')
	form.addEventListener('submit',handleLoginData)
	form.addEventListener('keypress',clearMsgBox)
})

function handleLoginData(){
	event.preventDefault()
	var form = new FormData(event.target)
	var email = form.get('email')
	var password = form.get('password')
	var error = document.getElementById("error-msg")
	var flag = false;
	for(let i = 0; i < arr.length; i++){
			if(arr[i].email == email){
					if(arr[i].password == password){
						saveData("loggedIn", email)
						location = "./dashboard.html"
					}else{
						error.innerHTML = "Wrong Password"
					}
					flag = true
					break
			}else{
					flag = false;
			}
	}
	if(!flag){
			error.innerHTML = "Account doesn’t exists"
	}
	
}
function clearMsgBox(){
	document.getElementById("error-msg").innerHTML = "&nbsp;"
}