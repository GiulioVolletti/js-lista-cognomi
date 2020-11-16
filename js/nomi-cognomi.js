// alert("hello world")


// chiedi all'utente il cognome
var cognomeUtente = prompt("inserisci qui il tuo cognome")
console.log(cognomeUtente);

// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).

// lista cognomi
var listaCognomi = ["pinco", "rossi", "verdi", "bianchi"];
console.log(listaCognomi);
// inserimento in lista
listaCognomi.push(cognomeUtente)
console.log(listaCognomi);


// Stampa la lista ordinata alfabeticamente.
listaCognomi.sort()
console.log(listaCognomi);
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

for (var i = 0; i < listaCognomi.length; i++) {
  console.log(listaCognomi[i]);
  while (listaCognomi[i] == cognomeUtente) {
    console.log(cognomeUtente + " si trova in posizione: " + [++i]);
    i++;
  }
}
