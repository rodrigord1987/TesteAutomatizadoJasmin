import { TokenService } from "./token.service";

describe('O Serviço tokenService', () => {
    let service; // definição variável para ser vista em todos os testes
    let token;

    beforeEach(() => { // método executado no início de cada teste
        service = new TokenService();
        token = 'newToken'
    })

    it('deve ser instanciado', () => { // teste de fumaça ou Smoke Test
        // const service = new TokenService();
        expect(service).toBeTruthy();
    });

    it('deve guardar o token', () => {
        // const service = new TokenService();
        // const token = 'newToken'
        service.setToken(token);
        expect(service.hasToken()).toBeTruthy();
        expect('newToken').toBe(service.getToken());

    })

    it('deve remover o token', () => {
        // const service = new TokenService();
        // const token = 'newToken'
        service.removeToken();
        expect(service.hasToken()).toBeFalsy();
        expect(service.getToken()).toBeFalsy();

    })

    afterEach(() => { // método executado no final de cada teste
        localStorage.clear();
    })
});