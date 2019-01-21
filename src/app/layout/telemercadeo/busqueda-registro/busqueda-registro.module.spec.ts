import { BusquedaRegistroModule } from './busqueda-registro.module';

describe('BusquedaRegistroModule', () => {
    let busquedaRegistroModule: BusquedaRegistroModule;

    beforeEach(() => {
        busquedaRegistroModule = new BusquedaRegistroModule();
    });

    it('should create an instance', () => {
        expect(busquedaRegistroModule).toBeTruthy();
    });
});
