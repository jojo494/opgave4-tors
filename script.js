const output =document.getElementById('outputDiv');

function printText(){
    const input = document.getElementById("textInput").value;
    console.log(input)

    output.innerHTML += /*HTML*/`
    <li><input type ="checkbox"> ${input}</li> 
    
    `;
}