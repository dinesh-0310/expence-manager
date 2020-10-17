// Global Array
var data;
var array;

window.addEventListener('load',function(){
    array = loadData('loggedIn') || []
    console.log(arr,array);
    var username = document.getElementById('username')
    for(let i = 0; i < arr.length; i++){
        if(array === arr[i].email){
            data = arr[i];
        }
    }
    // console.log(data.name);
    username.textContent = data.name
    allTransaction()
})
var tbody = document.getElementById('tbody')
function allTransaction(){
    tbody.innerHTML = "";
    tbody.innerHTML = "<tr><th>Title</th><th>Type</th><th>Amount</th><th>Time</th></tr>";
    if(data.transactions.length == 0){
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.setAttribute('colspan', '4')
        td.textContent = "No Transactions"
        tr.append(td)
        tbody.append(tr)
    }else{
        let transaction = data.transactions;
        for(let j = transaction.length-1; j >= 0; j--){
            let tr = document.createElement('tr')
            let td1 =document.createElement('td')
            let td2 =document.createElement('td')
            let td3 =document.createElement('td')
            let td4 =document.createElement('td')
            td1.textContent = transaction[j].title;
            td2.textContent = transaction[j].type;
            td3.textContent = transaction[j].amount;
            td4.textContent = transaction[j].timestamp;
            tr.append(td1,td2,td3,td4)
            tbody.append(tr)
        }
        var select = document.getElementById('type')
        select.addEventListener('change',getTableDetails)
    }
}
function getTableDetails(){
    var select = document.getElementById('type')
    var result = select.options[select.selectedIndex].value
    tbody.innerHTML = "";
    tbody.innerHTML = "<tr><th>Title</th><th>Type</th><th>Amount</th><th>Time</th></tr>";
    // console.log(result);
    let flag = false
    let tran = data.transactions;
    for(let i = tran.length-1; i >=0 ; i--){
        // console.log(tran[i].type);
        let type = tran[i].type.trim().toLowerCase()
        if(result == type){
            var tr1 = document.createElement('tr')
            var td1 = document.createElement('td')
            td1.innerHTML = tran[i].title
            var td2 = document.createElement('td')
            td2.innerHTML = tran[i].type
            var td3 = document.createElement('td')
            td3.innerHTML = tran[i].amount
            var td4 = document.createElement('td')
            td4.innerHTML = tran[i].timestamp
            tr1.append(td1,td2,td3,td4)
            tbody.append(tr1)
            flag = true
        }
        if(result == 'All'){
            allTransaction();
            flag = true
        }
    }
    if(!flag){
        let tr2 = document.createElement('tr')
        let td2 = document.createElement('td')
        td2.setAttribute('colspan', '4')
        td2.textContent = `No ${result} Transaction Available`
        tr2.append(td2)
        tbody.append(tr2)
    }
}