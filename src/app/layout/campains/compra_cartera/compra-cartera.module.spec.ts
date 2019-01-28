import {CampainModule} from '../campain.module';


describe('DashboardModule', () => {
  let campainModule: CampainModule;

  beforeEach(() => {
    campainModule = new CampainModule();
  });

  it('should create an instance', () => {
    expect(campainModule).toBeTruthy();
  });
});

