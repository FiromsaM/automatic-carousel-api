//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener("click", getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
    console.log(drink)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`

    fetch (url)
    .then(res => res.json())
    .then(data => {
        let arr = data.drinks
        console.log(arr)
        let i = 0

      if (i === 0){
            setInterval(function() {
                document.querySelector('h2').textContent = arr[i].strDrink
                document.querySelector('img').src = arr[i].strDrinkThumb
                document.querySelector('h3').textContent = arr[i].strInstructions
            
                if (i < arr.length - 1){
                    i++
                }else
                {
                    i = 0
                }
                
            }, 1000);
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}



