const partita_iva = require('./partita_iva');
const pive_valide = require('./pive_valide');
const pive_non_valide = require('./pive_non_valide');

pive_valide.forEach(function (e) {
    test('Check ' + e, () => {
        expect(partita_iva(e)).toBe(true);
    });
});

pive_non_valide.forEach(function (e) {
    test('Check ' + e, () => {
        expect(partita_iva(e)).toBe(false);
    });
});

