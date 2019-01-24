import {MyNotesModule} from './my-notes.module';


describe('DashboardModule', () => {
  let myNotesModule: MyNotesModule;

  beforeEach(() => {
    myNotesModule = new MyNotesModule();
  });

  it('should create an instance', () => {
    expect(myNotesModule).toBeTruthy();
  });
});
