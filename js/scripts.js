const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

// Ottieni il riferimento all'elemento del carosello
const carousel = document.getElementById('carousel');

// Ciclo per creare le immagini dinamicamente e aggiungerle al carosello
for (let i = 0; i < images.length; i++) {
    // Creazione di un elemento div per ogni immagine
    const item = document.createElement('div');
    item.className = 'carousel-item';

    // Creazione di un elemento img per l'immagine
    const img = document.createElement('img');
    img.className = 'carousel-img';
    img.src = images[i];
    img.alt = `Image ${i + 1}`;

    // Aggiungi l'immagine al div
    item.appendChild(img);

    // Aggiungi il div al carosello
    carousel.appendChild(item);
}

// Ottieni la lista di tutti gli elementi del carosello
const items = document.querySelectorAll('.carousel-item');

// Inizialmente mostra solo la prima immagine
items[0].classList.add('visible');

// Funzione per cambiare l'immagine visibile
function showImage(index) {
    // Rimuovi la classe 'visible' da tutti gli elementi
    items.forEach(item => item.classList.remove('visible'));

    // Aggiungi la classe 'visible' all'elemento desiderato
    items[index].classList.add('visible');
}

// Esempio: Mostra la seconda immagine dopo 2 secondi
setTimeout(() => {
    showImage(1);
}, 2000);

// Funzione per cambiare l'immagine visibile
function showImage(index) {
      // Rimuovi la classe 'visible' da tutti gli elementi
      items.forEach(item => item.classList.remove('visible'));
  
      // Aggiungi la classe 'visible' all'elemento desiderato
      items[index].classList.add('visible');
  }
  
  // Gestione dell'evento click sulla freccia sinistra
  document.getElementById('arrow-left').addEventListener('click', function () {
      // Trova l'indice dell'immagine attualmente visibile
      const currentIndex = Array.from(items).findIndex(item => item.classList.contains('visible'));
  
      // Calcola l'indice dell'immagine precedente
      const previousIndex = (currentIndex - 1 + items.length) % items.length;
  
      // Mostra l'immagine precedente
      showImage(previousIndex);
  });
  
  // Gestione dell'evento click sulla freccia destra
  document.getElementById('arrow-right').addEventListener('click', function () {
      // Trova l'indice dell'immagine attualmente visibile
      const currentIndex = Array.from(items).findIndex(item => item.classList.contains('visible'));
  
      // Calcola l'indice dell'immagine successiva
      const nextIndex = (currentIndex + 1) % items.length;
  
      // Mostra l'immagine successiva
      showImage(nextIndex);
  });
  
  // Esempio: Mostra la seconda immagine dopo 2 secondi
  setTimeout(() => {
      showImage(1);
  }, 2000);