let arr;

function loadData(key){return JSON.parse(localStorage.getItem(key))}
function saveData(key, data){localStorage.setItem(key, JSON.stringify(data))}

window.onload = function(){
	arr = loadData("users")
}