async function consejos() {
    try {
        const url = 'https://api.adviceslip.com/advice'
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        alert(error)
    }
}

function pintar(data) {
    const titleID = document.getElementById("title")
    const quoteID = document.getElementById("paraph")

    titleID.innerHTML = `advice #${data.slip.id}`
    quoteID.innerHTML = `${data.slip.advice}`
}

async function llamadaTotal() {
    const dataAdvice = await consejos()
    pintar(dataAdvice)
}
llamadaTotal()

document.getElementById("boton").addEventListener("click", () => {
    llamadaTotal()
})