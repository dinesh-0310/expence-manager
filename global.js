let arr;

function loadData(key){return JSON.parse(localStorage.getItem(key))}
function saveData(key, data){localStorage.setItem(key, JSON.stringify(data))}
function userData(key){return arr.filter((elem)=>{return elem.email == key})}
       
window.onload = function(){
	arr = loadData("users")
	// console.log(arr)
	if(arr == null){
		arr = []
		arr.push(
			{
				name: "Wahed Ali",
				email: "wahed@gmail.com",
				password: "123456",
				transactions: [
					{title: "Salary", type: "Credit", amount: 50000, timestamp: "2020-09-01 09:00"},
					{title: "Petrol", type: "Debit", amount: 5000, timestamp: "2020-09-02 09:00"},
					{title: "Broadband", type: "Debit", amount: 1000, timestamp: "2020-09-05 09:00"},
					{title: "House Rent", type: "Debit", amount: 5000, timestamp: "2020-09-30 09:00"},
					{title: "Shop Rent", type: "Credit", amount: 15000, timestamp: "2020-10-01 09:00"},
					{title: "Grocery", type: "Debit", amount: 5000, timestamp: "2020-10-02 09:00"}
				]
				})
		arr.push(
			{
				name: "Dinesh Chaudhari",
				email: "dinesh@gmail.com",
				password: "123456",
				transactions: [
					{title: "Salary", type: "Credit", amount: 75000, timestamp: "2020-09-01 09:00"},
					{title: "Petrol", type: "Debit", amount: 15000, timestamp: "2020-09-02 09:00"},
					{title: "Broadband", type: "Debit", amount: 1000, timestamp: "2020-09-05 09:00"},
					{title: "House Rent", type: "Debit", amount: 5000, timestamp: "2020-09-30 09:00"},
					{title: "Shop Rent", type: "Credit", amount: 5000, timestamp: "2020-10-01 09:00"},
					{title: "Grocery", type: "Debit", amount: 5000, timestamp: "2020-10-02 09:00"}
				]
			})
		saveData("users", arr)
	}
}