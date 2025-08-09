const toggle = document.getElementById('price-toggle')
const monthlyPlan = document.querySelector('.annually-section')
const yearlyPlan = document.querySelector('.monthly-section')

toggle.addEventListener('change', ()=>{
    if(toggle.checked){
        monthlyPlan.style.display = 'none'
        yearlyPlan.style.display = 'flex'
    }else{
        monthlyPlan.style.display =  'flex'
        yearlyPlan.style.display = 'none'
    }
})