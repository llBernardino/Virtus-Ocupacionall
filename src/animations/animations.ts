 
 export const myObserver = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting === true){
            entry.target.classList.add('show')
            
        } else{
            entry.target.classList.remove('show')
            entry.target.classList.add('hidden')
        }
    })
})
   
 
    const selector = (): void => {
        const elements = document.querySelectorAll('.select')
        elements.forEach((element) => myObserver.observe(element))
    };
    
        setInterval(selector, 1000); 

    

    