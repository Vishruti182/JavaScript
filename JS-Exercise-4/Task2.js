const firstName=document.getElementById("firstName"); 
const lastName=document.getElementById("lastName"); 
const btn=document.getElementById("btn"); 
const tableBody=document.getElementById("tableBody"); 

let rowIndex=null; 

btn.addEventListener('click', function() { 
    const firstNm=firstName.value; 
    const lastNm=lastName.value;

    if (rowIndex!==null) {
        rowIndex.cells[0].textContent=firstNm;
        rowIndex.cells[1].textContent=lastNm;
    } else {
        const row=document.createElement('tr'); 
        
        row.innerHTML=`<td>${firstNm}</td> 
            <td>${lastNm}</td> 
            <td> 
                <button id="editBtn">Edit</button> 
                <button id="deleteBtn">Delete</button> 
            </td>`;
             

        row.querySelector('#deleteBtn').addEventListener('click', ()=>row.remove());
        row.querySelector('#editBtn').addEventListener('click', ()=>editData(row)); 

        tableBody.appendChild(row); 
    }

    resetForm();
});

function editData(row) {
    rowIndex=row; 
    
    firstName.value=row.cells[0].textContent;
    lastName.value=row.cells[1].textContent;
    
    btn.textContent="Update";

}

function resetForm(){
    
    firstName.value='';
    lastName.value='';
    btn.textContent="Add";
    rowIndex=null;
}