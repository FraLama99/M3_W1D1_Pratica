/* JS Exercises should go here */

// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
window.onload = function () {
    const asideLinks = document.querySelectorAll('aside a');
    asideLinks.forEach(link => {
        if (link.textContent.toLowerCase() === 'twitter') {
            link.parentElement.removeChild(link);
        }
    });
};
// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
document.querySelectorAll('a').forEach(link => {
    if (link.textContent.toLowerCase() === 'continua a leggere') {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            link.parentElement.remove();
        });
    }
});
// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.
document.querySelectorAll('.blog-post .blog-post-meta a').forEach(author => {
    author.addEventListener('mouseover', function () {
        alert(author.textContent);
    });
});