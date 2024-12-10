
const getPageIndex = () => {
    const page = window.location.pathname.split("/").pop();
    switch (page) {
        case "index.html":
            return "index";
        case "socket.html":
            return "socket";
        case "osi.html":
            return "osi";
        case "tcp-udp.html":
            return "tcp-udp";
        case "glossario.html":
            return "glossario";
        default:
            return "index";
    }
};


fetch('index.json')
    .then(respose => {
        if (!respose.ok) {
            throw new Error('Errore nel caricamento del file json');
        }
        return respose.json();
    })

    .then(data => {
        const index = getPageIndex();
        if (data[index]) {
            const pageData = data[index];
            for (const id in pageData) {
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = pageData[id];
                }
            }
        } else {
            console.error(`Chiave non trovata nel file JSON.`);
        }
    })
    .catch(error => {
        console.error('Errore: ', error);
    });