# Columns

Un proyecto para leer diferentes columnistas en un solo lugar.


## Solvind DaVinci

Entre las últimas pertenecncias del gran genio renacentista se encontró un texto adherido a una caja que explicaba el último juego que el pintor dejaría para generaciones futuras. Con los últimos avances en análisis de documentos ahora se ha descubierto que el texto reza así. 

He diseñado mi última maquinaría revolucionaria. Los planos se encuentran descritos en este mi postrero criptex. Solo la combinación adecuada permitirá descubrir este avance a la humanidad sin dañas para siempre los contenidos. La clave se esconde en esta imagen. Depues el texto continuaba con lo siguiente:

 70,22,358,46,12,36,2,46,12,36,3,46,12,36,10,46,4,36,24,46,2,36,13,46,2,36,3,46,2,36,18,46,2,36,2,46,2,36,22,46,2,36,13,46,2,36,5,46,2,36,16,46,2,36,4,46,2,36,20,46,2,36,13,46,2,36,7,46,2,36,14,46,2,36,6,46,2,36,20,46,2,36,11,46,4,36,7,46,8,36,6,46,12,36,20,46,2,36,15,46,2,36,13,46,2,36,14,46,2,36,20,46,2,36,17,46,2,36,13,46,2,36,12,46,2,36,20,46,2,36,16,46,2,36,13,46,2,36,13,46,2,36,20,46,2,36,7,46,9,36,6,46,9,36,15,46,2,36,497,46

Tras muchos estudios probabilisticos se sabe que se trata de una obra pictorica codificada. Las dos primeras posiciones corresponden a las dimensiones del lienzo [horizontal y vertical] respectivamente. El resto corresponde a los datos de la pintura de acuerdo a la siguiente codificación.

- Debe imaginarse el lienzo como una grilla de las dimensiones establecidas
- Éste debe dibujarse por barridos horizontales de izquierda a derecha y de arriba a abajo
- Al acabar de pintar por el extremo derecho se continua por el izquierdo de la siguiente fila
- Los datos se organizan por pares [a, b]. En cada par:
   - a representa el número de casillas con color repetido
   - b representa el color en si mismo.

Los cientificos en posesión de este códice están intentando dar con la clave que abriría el criptex. Para ello han sustituido los codigos de color por caracteres ASCII válidos. ¿Sabrías decir que código nos legó en este trabajo Leonardo?

Para l@s 10 primer@s valientes que escriban el código JavaScript que da solución a este problema e indiquen correctamente cual es la clave que abre el criptex recibiran una entrada gratuita a la edición de Otoño de CodeMotion 2021. Escribe tu solución con un correo privado a:

javier.velez.reyes@gmail.com

¿Te animas a participar?
Feliz reto!



1002691904


let width = daVinci[0];
    let high = daVinci[1];
    for (var i = 0; i < width; i++) {
      this.rectangle[i] = [];
      for (var j = 0; j < high; j++) {
        for (var k = 2; k < daVinci.length; k + 2) {
          let asci = String.fromCodePoint(daVinci[k + 1]);
          for (var n = 0; n < daVinci[k]; n++) {
            this.rectangle[i][j] = asci;
          }
        }
        this.rectangle[i][j] = 'asci';
      }
    }