let credit
let debit
let total
let user
let usrData

window.addEventListener('load', handleDashboard)

function handleDashboard(){
	let form = document.querySelector('form')
	form.addEventListener('submit', handleForm)
	user = loadData("loggedIn")

	renderDOM()
}

function renderDOM(){
	arr = loadData("users")
	usrData = userData(user)
	console.log(usrData)
	credit = 0
	debit = 0
	total = 0
	for(let i = 0; i < usrData[0].transactions.length; i++){
		if(usrData[0].transactions[i].type == 'Credit'){credit += Number(usrData[0].transactions[i].amount)}
		else if(usrData[0].transactions[i].type == 'Debit'){debit += Number(usrData[0].transactions[i].amount)}
	}
	total = credit - debit

	document.getElementById("income-value").innerHTML = ""
	document.getElementById("income-value").innerHTML = credit
	document.getElementById("expenses-value").innerHTML = ""
	document.getElementById("expenses-value").innerHTML = debit
	document.getElementById("balance").innerHTML = ""
	document.getElementById("balance").innerHTML = total

	let disp = document.querySelector('tbody')
	disp.innerHTML = "<tr><th>Title</th><th>Type</th><th>Amount</th><th>Time</th></tr>"

	let end = 0
	if(usrData[0].transactions.length >= 5){ end = usrData[0].transactions.length - 5}

	for(let j = usrData[0].transactions.length - 1; j >= end; j--){
		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')
		let td4 = document.createElement('td')

		td1.innerText = usrData[0].transactions[j].title
		td2.innerText = usrData[0].transactions[j].type
		td3.innerText = usrData[0].transactions[j].amount
		td4.innerText = usrData[0].transactions[j].timestamp
		tr.append(td1,td2,td3,td4)
		disp.appendChild(tr)
	}
}

function handleForm(){
	event.preventDefault()
	let frmData = new FormData(this)
	let title = frmData.get('title')
	let type = frmData.get('type')
	let amount = frmData.get('amount')
	let date = new Date()
	
	let timestamp = date.getFullYear() + "-" + pad(date.getMonth()) + "-" + pad(date.getDate()) + " " + pad(date.getHours()) + ":" + pad(date.getMinutes())


	for(let k = 0; k < arr.length; k++){
		if(arr[k].email == user){
			arr[k].transactions.push({title: title, type: type, amount: amount, timestamp: timestamp})
			saveData('users', arr)
		}
	}
	arr = loadData("users")
	renderDOM()
}

function pad(n) {
	return (n < 10) ? ("0" + n) : n;
}