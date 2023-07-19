const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step")

console.log(formSteps);

let formStepsNum = 0;

// For next button 
nextBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        console.log("This is Next Button")
        formStepsNum++;
       updateFormStep();
       updateProgressbar();
    });
})


// Previous Button 
prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("This is Previous Button")
        formStepsNum--;
        updateFormStep();
        updateProgressbar();
    })
});


function updateFormStep() {
    // remove form-step-active class from previous form 
    
    formSteps.forEach(formStep =>{
        formStep.classList.contains("form-step-active") && formStep.classList.remove("form-step-active");
    })

    // Add form-step-active Class 
    formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar(){
    console.log("Progressbar is Updated");
    progressSteps.forEach((progressStep, index)=>{
        if(index < formStepsNum + 1){
            progressStep.classList.add("Progress-step-active");
        }
        else{
            progressStep.classList.remove("Progress-step-active");
        }
    })

    const progessActive = document.querySelectorAll(".Progress-step-active");

    progress.style.width = ((progessActive.length -1) / (progressSteps.length - 1)) * 100 + "%";
}

