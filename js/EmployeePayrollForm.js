window.addEventListener('DOMContentLoaded',(event) =>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.name-error');
    name.addEventListener('input', function(){
        if(name.value.length == 0) {
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name=name.value;;
            textError.textContent="";

        }catch(e){
            textError.textContent=e;
        }

    });
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function() {
    output.textContent = salary.value;
    });

});
const save = () =>{
    try {
        let empPayrollData = createEmployeePayroll();
    }catch(e){
        return;
    }
}
const createEmployeePayroll= () => {
    let empPayrollData=new EmployeePayrollData();
    try{
        empPayrollData.name=getInputValueById('#name');

    }catch(e){
        setTextValue('.text-error', e);
        throw e;
    }
    empPayrollData.profileImg = getSelectedValues('[name=profile]').pop();
    empPayrollData.gender=getSelectedValues('[name=gender]').pop();
    empPayrollData.department=getSelectedValues('[name=department]');
    empPayrollData.salary=getInputValueById('#salary');
    empPayrollData.notes=getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    empPayrollData.date=Date.parse(date);
    alert(empPayrollData.toString());
    return empPayrollData;
}
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);

    });
    return selItems;
}
const getInputValueById = (id) => {
    let  value = document.querySelector(id).value;
    return value;
}

