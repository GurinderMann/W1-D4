"use strict";
fetch('./Abbigliamento.json')
    .then((response) => {
    if (!response.ok) {
        throw new Error(`Errore durante la richiesta: ${response.status} ${response.statusText}`);
    }
    return response.json();
})
    .then((data) => {
    console.log('Dati ricevuti:', data);
    function createCapoAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        return {
            id,
            codprod,
            collezione,
            capo,
            modello,
            quantita,
            colore,
            prezzoivaesclusa,
            prezzoivainclusa,
            disponibile,
            saldo,
            getsaldocapo: function () {
                const discountPercentage = this.saldo;
                const discountAmount = (discountPercentage / 100) * this.prezzoivainclusa;
                return discountAmount;
            },
            getacquistocapo: function () {
                const discountPercentage = this.saldo;
                const discountAmount = (discountPercentage / 100) * this.prezzoivainclusa;
                return this.prezzoivainclusa - discountAmount;
            },
        };
    }
    const itemData = data[2];
    const capo = createCapoAbbigliamento(itemData.id, itemData.codprod, itemData.collezione, itemData.capo, itemData.modello, itemData.quantita, itemData.colore, itemData.prezzoivaesclusa, itemData.prezzoivainclusa, itemData.disponibile, itemData.saldo);
    const saldoDaSottrarre = capo.getsaldocapo();
    const costoTotale = capo.getacquistocapo();
    console.log('Saldo da sottrarre:', saldoDaSottrarre);
    console.log('Costo totale:', costoTotale);
})
    .catch((error) => {
    console.error('Errore durante il fetch:', error);
});
