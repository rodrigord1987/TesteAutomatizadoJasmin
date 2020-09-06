import { isLowerCase } from "./lower-case.validator";

describe('Teste do componente lower-case.validator', () => {
    it('Deve validar se a palavra estará em caixa baixa', () => {
        const valor = 'rodrigo';
        const resultado = isLowerCase(valor)
        expect(resultado).toBeTruthy(); // toBeTruthy pra testar se é TRUE. Pode ser substituído com o método toBe(true).

    });

    it('Deve validar se a palavra não está em caixa baixa', () => {
        const valor = 'Rodrigo';
        expect(isLowerCase(valor)).toBeFalsy(); //toBeFalsy pra testar se é FALSE. Pode ser substituído com o método toBe(false).

    });

});