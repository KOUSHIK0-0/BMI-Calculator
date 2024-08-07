const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')
    result.style.height = "100px"
    result.style.display = "flex"
    result.style.justifyContent = "center"
    result.style.alignItems = "center"

    if(height === '' || height < 0 || isNaN(height))
    {
        result.innerText = "Please give me a valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        result.innerText = "Please give me a vaild weight"
    }
    else
    {
        const value = ((weight)/((height*height)/10000)).toFixed(2)
        if(value < 18.6)
        {
            result.innerText = `The BMI Index is ${value}\n\n You are underWeighted, Eat Food!`
        }
        else if(value >= 18.6 && value <= 24.9)
        {
            result.innerText = `The BMI Index is ${value}\n\n You are Normal, Maintain this body!`
        }
        else
        {
            result.innerText = `The BMI Index is ${value}\n\n You are Overweighted, Do Excerise!`
        }
        
    }
    
})