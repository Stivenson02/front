import {CampainModule} from './campain.module';


describe('LayoutModule', () => {
    let campainModule: CampainModule;

    beforeEach(() => {
      campainModule = new CampainModule();
    });

    it('should create an instance', () => {
        expect(campainModule).toBeTruthy();
    });
});
