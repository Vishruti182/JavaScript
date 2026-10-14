const names=[
    'John Doe',
    'Jessica Miller',
    'Grahm David',
    'Daniel Anderson',
    'William Jackson',
    'Jack Michel',
    'Jassica Moore',
    'Emily Davis',
    'Sarah Miller',
    'James Wilson',
    'Jane Smith',
    'Thomas Adison',
    'Juhi Smith',
    'Grahm Bell',
    'Einstein Bell',
    'Ashley Brown',
    'Maria Black',
    'James Bond'
];
const searchInput=document.getElementById('nameSearch');
const list=document.getElementById('matchedNames');



searchInput.addEventListener('input',function(){
    const searchText=searchInput.value.toLowerCase().trim();
    list.innerHTML='';
    let messages=false;

    if(searchText.length===1){
        const msg=document.createElement('li');
        msg.textContent='Please enter more chareacters...'
        list.appendChild(msg);
        
    }
    else{
        names.forEach((name)=>{
        if(name.toLowerCase().trim().includes(searchText)){
            messages=true;
            const row=document.createElement('li');
            const indexFst=name.toLowerCase().indexOf(searchText);
            const search = `<span class="highlight">${name.substring(indexFst, indexFst + searchText.length)}</span>`;
            row.innerHTML = name.substring(0, indexFst) + search + name.substring(indexFst + searchText.length);
            list.appendChild(row);
        }
    });
    if(!messages){
        const msgNotFound=document.createElement('li');
        msgNotFound.textContent='No name Found!';
        list.appendChild(msgNotFound);
    }
    }
    
});
