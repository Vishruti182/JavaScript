const data=[
  { "firstName": "John", "lastName": "Doe" },
  { "firstName": "Jane", "lastName": "Smith" },
  { "firstName": "Michael", "lastName": "Johnson" },
  { "firstName": "Emily", "lastName": "Davis" },
  { "firstName": "David", "lastName": "Brown" },
  { "firstName": "Sarah", "lastName": "Miller" },
  { "firstName": "James", "lastName": "Wilson" },
  { "firstName": "Jessica", "lastName": "Moore" },
  { "firstName": "John", "lastName": "Doe" },
  { "firstName": "Daniel", "lastName": "Anderson" },
  { "firstName": "Ashley", "lastName": "Thomas" },
  { "firstName": "William", "lastName": "Jackson" },
  { "firstName": "Amanda", "lastName": "White" }
];
const tableBody=document.getElementById("tableBody");
const renderBtn=document.getElementById("renderBtn");

let rowIndex=null; 

const uniqueData = Array.from(
  new Map(data.map(item => [`${item.firstName}|${item.lastName}`, item])).values()
);

renderBtn.addEventListener('click',function(){
    for(let i of uniqueData){
       const row=document.createElement('tr'); 
       row.innerHTML=`<td>${i.firstName}</td> 
            <td>${i.lastName}</td> 
            <td> 
                <button id="editBtn">Edit</button> 
                <button id="deleteBtn">Delete</button> 
            </td>`; 
        tableBody.appendChild(row); 

        row.querySelector('#deleteBtn').addEventListener('click', ()=>row.remove());
        row.querySelector('#editBtn').addEventListener('click', ()=>editData(row)); 
    }
});

//const body=document.getElementsByTagName(body);
const firstName=document.getElementById("firstName"); 
const lastName=document.getElementById("lastName");
const btn=document.getElementById("updateBtn");

btn.addEventListener('click', function() {
    rowIndex.cells[0].textContent=firstName.value;
    rowIndex.cells[1].textContent=lastName.value;
        
    
});

function editData(row) {
    rowIndex=row; 

    firstName.value=row.cells[0].textContent;
    lastName.value=row.cells[1].textContent;
}

function resetForm(){
    firstName.value='';
    lastName.value='';
    rowIndex=null;
}