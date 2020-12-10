let buttonStart = document.getElementById('startRecord');

let buttonEnd = document.getElementById('stopRecord');

let playText = document.getElementById('playText');

let text = document.getElementById('texto');

let recognition = new webkitSpeechRecognition();

recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {


    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    text.value += frase;
    console.log(results);
}

recognition.onend = (event) => {
    console.log("El microfono deja de escuchar");
}

recognition.onerror = (event) => {
    console.log(event.error);
}


buttonStart.addEventListener('click', () => {
    recognition.start();
});

buttonEnd.addEventListener('click', () => {
    recognition.abort();
});

playText.addEventListener('click', () => {
    leerTexto(text.value);
});


function leerTexto(texto) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = texto;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}