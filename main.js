// [  ] Criar tabuleiro de tic tac toe com as regras padrões
// [  ] Informar o resultado (vencedor ou empate)
// _____________________________________________________
// [  ] Limpar tabuleiro
// [  ] Criar animações
// [  ] Definição dos nomes dos jogadores
// [  ] Exibir o placar acumulado
// [  ] Manter essas informações gravadas mesmo quando encerrar o browser e abrir novamente

var nClicks = 0;
const xsrc = "https://www.pngarts.com/files/3/Letter-X-Transparent-Image.png";
const osrc = "https://img.pngio.com/fileo-jolle-insignapng-wikimedia-commons-png-o-378_378.png";

function tttBox() {
  // This function will make and return a span that does all the things each box needs to do

  // Make an image; don't give it a src yet, and also don't attach it to the span yet
  const img = document.createElement("img"); 
  img.classList.add("box_size");

  // Create the span with the right classes
  const span = document.createElement("span");
    span.classList.add("box_size"); 
    span.classList.add("ttt_box"); 
    
    // Define what should happen when you click on the span
  span.onclick = function() {
      // Do something only if the span doesn't already have a child node
      if (!span.hasChildNodes()) {
        // See whether nClicks is odd
            const odd = nClicks % 2;
          if (odd) {
              // Set the image to be an O if nClicks is odd
            img.src = osrc;
          } else {
              // Set the image to be an X if nClicks is even (not odd)
            img.src = xsrc;
          }
            // Attach image to span so that it actually shows up now
          span.appendChild(img);
            // Increase nClicks (global variable) by 1 to know if next should be O or X
        nClicks++;
        }
    }
    // Now that our span is built, and it knows what happens when you click it, return it
    return span;
}

// Find where the game board should go in the HTML
const div = document.getElementById("game_board");

// Make an array to hold the boxes
const m = 9;
let board = new Array(m);
// Fill the array
for (var i = 0; i < m; i++) {
  // Each spot in the array has a tttBox (which is the span returned by that function)
    board[i] = tttBox();
    // Attach the span to the gameboard div so that it actually shows up
    div.appendChild(board[i]);
}

// Done!
