function imc() {
    let x = parseFloat(document.getElementById('peso').value);
    let y = parseFloat(document.getElementById('altura').value);
    let result = (x / (y * y)).toFixed(2);
    let text = "";
    if (result <= 18) {
        text = " bajo peso"
    } else if (result <= 24) {
        text = " saludable"
    } else if (result <= 30) {
        text = " sobrepeso"
    } else if (result > 30) {
        text = " OBESIDAD"
    }
    document.getElementById('res').innerHTML = result + text;

}
function formula() {
    let name = document.getElementById("name").value;

    let x = parseFloat(document.getElementById("years").value);
    let resulta = (16 * (Math.log(x)) + 31).toFixed(0);

    let fin = "TU MASCOTA " + name + " TIENE " + resulta + " AÑOS PERRUNOS";
    document.getElementById('res').innerHTML = fin;

}

function seven_years() {
    let name = document.getElementById("name").value;

    let x = parseFloat(document.getElementById("years").value);
    let resulta = x * 7;

    let fin = "TU MASCOTA " + name + " TIENE " + resulta + " AÑOS PERRUNOS";
    document.getElementById('res').innerHTML = fin;
}








