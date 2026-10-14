// Grab inputs and buttons
const mailIn=document.getElementById('mailIn');
const passIn=document.getElementById('pwdIn');
const mailUp=document.getElementById('mailUp');
const passUp=document.getElementById('pwdUp');
const role=document.getElementById('role');
const signupBtn=document.getElementById('signupBtn');
const signinBtn=document.getElementById('signinBtn');
const addCourseBtn=document.getElementById('assignCourse');
const courseName=document.getElementById('course');
const tableBody=document.getElementById('tableBody');
const tableBodyStd=document.getElementById('tableBodyStd');
const noCourseMsg=document.getElementById('noCourse');



if(signupBtn){
    signupBtn.addEventListener('click', function(event){
        event.preventDefault();
        const emailValue=mailUp.value;
        const passValue=passUp.value;
        const selRole=role.value;
        const userData={
            email: emailValue,
            password: passValue,
            role: selRole
        };
        const userKey='user_'+emailValue;

        if(localStorage.getItem(userKey)){
            alert("Email already registered! Please choose a unique email.");
            return;
        }else{
            localStorage.setItem(userKey, JSON.stringify(userData));
            alert("Registration successful!");
        }

        if(selRole==='student'){
            window.location.href='Student.html';
        }else if(selRole==='admin'){
            window.location.href='Admin.html';
        }
    });
}

if(signinBtn){
    signinBtn.addEventListener('click', function(event){
        event.preventDefault();
        const emailValueIn=mailIn.value;
        const passValueIn=passIn.value;
        const userExists=localStorage.getItem('user_'+emailValueIn);

        if(!userExists){
            alert('Please register your account!');
            return;
        }

        const userData=JSON.parse(userExists);
        if(userData.password===passValueIn){
            if(userData.role==='student'){
                window.location.href='Student.html';
            }else if(userData.role==='admin'){
                window.location.href='Admin.html';
            }
        }else{
            alert("Invalid password!");
        }
    });
}

let courses=JSON.parse(localStorage.getItem('courses')) || [];

if(addCourseBtn){
    if(tableBody){
        tableBody.innerHTML='';
        courses.forEach((c)=>addData(c));
    }

    addCourseBtn.addEventListener('click',function(event){
        event.preventDefault();
        const courseNm=courseName.value;

        courses.push(courseNm);
        localStorage.setItem('courses',JSON.stringify(courses)); 

        addData(courseNm);
        resetForm();
    });
}

function addData(courseNm){
    const row=document.createElement('tr'); 
    row.innerHTML=`<td>${courseNm}</td> 
        <td><button class="deleteBtn">Delete</button></td>`;

    tableBody.appendChild(row);

    row.querySelector('.deleteBtn').addEventListener('click', function(){
        courses=courses.filter((c) => c !== courseNm);
        localStorage.setItem('courses',JSON.stringify(courses)); 
        row.remove();
    });
}

function resetForm(){
    if(courseName)
        courseName.value='';
}


if(tableBodyStd){
    if(courses.length===0){
        if(noCourseMsg)
            noCourseMsg.removeAttribute('hidden');
    }else{
        if(noCourseMsg)
            noCourseMsg.setAttribute('hidden', true);

        courses.forEach((courseNm)=>{
            const row=document.createElement('tr');
            row.innerHTML=`<td>${courseNm}</td>`;

            tableBodyStd.appendChild(row);
        });
    }
}

