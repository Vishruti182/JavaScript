const nm=document.getElementById("name");
const checkAll=document.getElementById("checkAll");
const delBtn=document.getElementById("deleteBtn");
const addBtn=document.getElementById("addBtn");
let rowIndex=null;
const tableBody=document.getElementById("tableBody");


addBtn.addEventListener('click', function() { 
    const name=nm.value; 

    const row=document.createElement('tr'); 
        
    row.innerHTML=`<td>${name}</td> 
        <td> 
            <input type="checkbox" id="checkRow">
        </td>`;
    
    tableBody.appendChild(row);

    resetForm();

    const element=document.getElementById("checkRow");
    element.onchange=function(e){
        if(e.target.checked){
            delBtn.disabled=false;
            delBtn.addEventListener('click', ()=>deleteData());
        }
    };
});

function deleteData() {
  const checkedBoxes = document.querySelectorAll('#checkRow:checked');
  
  checkedBoxes.forEach(checkbox => {
    const row = checkbox.closest('tr');
    row.remove();
  });
}


checkAll.addEventListener('change',function(e){
    if(e.target.checked){
        delBtn.disabled=false;
        delBtn.addEventListener('click', ()=>deleteAllData());
    }
})

function deleteAllData() {
  const checkedBoxes = document.querySelectorAll('#checkRow');
  
  checkedBoxes.forEach(checkbox => {
    const row = checkbox.closest('tr');
    row.remove();
  });
}

function resetForm(){
    nm.value='';
    rowIndex=null;
}
