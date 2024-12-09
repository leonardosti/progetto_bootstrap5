fetch('index.json')
    .then(respose => {
        if (!respose.ok) {
            throw new Error('Errore nel caricamento del file json');
        }
        return respose.json();
    })

    .then(data => {
        for (const id in data) {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = data[id];
            }
        }
    })
    .catch(error => {
        console.error('Errore: ', error);
    });