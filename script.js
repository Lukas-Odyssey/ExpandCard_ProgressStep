const panels = document.querySelectorAll('.panel');
panels.forEach((panel, idx) => {
    panel.addEventListener("click", () => {
        if(idx == 0){
            progress.style.width = 0+'% '
            next.disabled = false
            prev.disabled = true
        }else{
            prev.disabled = false
            progress.style.width = idx * 11 + 1 + '%'
        }

        currentActive = idx
        update()


        removeActiveClasses();
        panel.classList.add('active');
    });
    
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')
const progress = document.getElementById('progress')

let currentActive = 0
next.addEventListener('click', () =>{
    currentActive++
    if(currentActive > circles.length - 1){
        currentActive = circles.length - 1
    }
    progress.style.width = currentActive * 11 + 1 + '%'
    update()
    removeActiveClasses()
    panels.forEach((panel, idx) => {
        if(idx === currentActive){
            panel.classList.add('active')
        }
    })
})
prev.addEventListener('click', () =>{
    currentActive--
    if(currentActive < 0){
        currentActive = 0
    }
    if(currentActive === 0){
        progress.style.width = 0 + '%'
    }else{
        progress.style.width = currentActive * 11 + 1 + '%'
    }
    update()
    removeActiveClasses()
    panels.forEach((panel, idx) => {
        if(idx === currentActive){
            panel.classList.add('active')
        }
    })
})

function update(){
    const actives = document.querySelectorAll('.active')
    circles.forEach((circle, idx) =>{
        if(idx == currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    if(currentActive === 0){
        prev.disabled = true
    }else if(currentActive === circles.length-1){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }

}