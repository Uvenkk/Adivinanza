function adivinanza() {
    alert("Me alegra que hayas decidido jugar");
    var intentos = 0;
    var respuesta = "tigre";

    while (intentos < 4) {
        switch (intentos) {
            case 0:
                var usuario = prompt("Ingresa tu respuesta, tienes 4 intentos, tu respuesta en minuscula");
                intentos++;
                break;
            case 1:
                var usuario = prompt("Ingresa tu respuesta, tienes 3 intentos, tu respuesta en minuscula");
                intentos++;
                break;

            case 2:
                var usuario = prompt("Ingresa tu respuesta, tienes 2 intentos, tu respuesta en minuscula \nPista1=(Su cuerpo tiene rayas que le sirven para camuflarse)");

                intentos++;
                break;

            case 3:
                var usuario = prompt("Ingresa tu respuesta, ultimo intento, tu respuesta en minuscula\nPista1=(Su cuerpo tiene rayas que le sirven para camuflarse) \nPista2=(Esta raza de felino aparece en Aladdin como la mascota de la princesa)");
                intentos++;
                break;
        }


        if (usuario == respuesta) {
            alert("Felicidades, acertaste en " + intentos + " intentos");
            break;
        } else if (usuario != respuesta && intentos == 4) {
            alert("No acertaste, la respuesta era tigre");
        } else {
            alert("Respuesta incorrecta");
        }


    }



}