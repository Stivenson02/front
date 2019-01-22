import { Reg_AleatorioModule } from './reg_aleatorio.module';

describe('Reg_AleatorioModule', () => {
    let reg_AleatorioModule: Reg_AleatorioModule;

    beforeEach(() => {
        reg_AleatorioModule = new Reg_AleatorioModule();
    });

    it('should create an instance', () => {
        expect(reg_AleatorioModule).toBeTruthy();
    });
});
