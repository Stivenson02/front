import { CrearNuevoConsumidorModule } from './crear-nuevo-consumidor.module';

describe('ChartsModule', () => {
    let chartsModule: CrearNuevoConsumidorModule;

    beforeEach(() => {
        chartsModule = new CrearNuevoConsumidorModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
