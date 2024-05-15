let paswor;
let variable = 0;
let usuario = "";
function registro() {

    let fname = document.getElementById("name1").value;
    let sname = document.getElementById("name2").value;
    let date = document.getElementById("year").value;
    let date1 = document.getElementById("moth").value;
    let date2 = document.getElementById("day").value;
    paswor = document.getElementById("pas").value;

    let uno = (fname + sname).replace(/\s/g, "");
    let dos = uno.toLowerCase();
    usuario = dos + date[2] + date[3] + date2 + date1 + "@gmail.com";
    window.alert("TU NUEVO USUARIO ES: \n" + usuario);
}


function iniciar_secion() {
    variable = variable + 1;
    let name_secion = document.getElementById("ini_nam").value;
    let paswor_secion = document.getElementById("ini_pas").value;
    if (name_secion == usuario && paswor == paswor_secion) {
        window.alert("SECION CORRECTA");
    } else if (variable == 3) {

        window.alert("SE BLOQUEARA LA PAGINA");
        document.write("SE BLOQUEO LA PAGINA");
    } else {
        window.alert("usuario o contraseña incorrecta!");
    }
}

