const partita_iva = require('./partita_iva');
const pive_valide = require('./pive_valide');

pive_valide.forEach(function (e) {
    test('Check ' + e, () => {
        expect(partita_iva(e)).toBe(true);
    });
});

