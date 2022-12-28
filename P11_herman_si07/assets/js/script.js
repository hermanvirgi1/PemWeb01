 // menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
  // jika di klik akan menjalankan fungsi computerChoise
  a.addEventListener("click",(Element) => {
    computerChoice(Element)
  })
)
function computerChoice(Element){
    // tangkap pilhan user
    let pilihanUser = Element.target.innerText;
    // menangkap elment result dengan querySelector untuk menampung
    // nilai hasil dari game

    let pilihanComputer = document.querySelector("aresult");

    let choices = ["Rock", "Paper", "Scissors"];

    pilihanComputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    if (pilihanUser == pilihanComputer) {
        alert("DRAW");
    }

    if(pilihanUser == "Rock" && pilihanComputer == "Scissort") {
        alert("YOU WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    }else if(pilihanUser == "Scissort" && pilihanComputer == "Paper") {
        alert("YOU WIN");
    }



    if(pilihanUser == "Rock" && pilihanComputer == "Paper") {
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Scissort") {
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Scissort" && pilihanComputer == "rock") {
        alert("COMPUTER WIN");
    }
}