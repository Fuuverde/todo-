const taskValue=document.getElementsByClassName('task_value')[0]
const taskSubmit=document.getElementsByClassName('task_submit')[0]
const taskList=document.getElementsByClassName('task_list')[0]

const addtasks=(task)=>{
    const listItem=document.createElement('li')
    const showItem=taskList.appendChild(listItem)
    showItem.innerHTML=task;

    const deletebutton=document.createElement('button')
    deletebutton.innerHTML="消す";
    listItem.appendChild(deletebutton)

    deletebutton.addEventListener('click',evt=>{
        evt.preventDefault();
        deleteTask(deletebutton);
    });
};
const deleteTask=(deletebutton)=>{
    const chosentask=deletebutton.closest('li');
    taskList.removeChild(chosentask);
};
taskSubmit.addEventListener('click',evt=>{
    evt.preventDefault();
    const task=taskValue.value;
    addtasks(task);
    taskValue.value='';
});