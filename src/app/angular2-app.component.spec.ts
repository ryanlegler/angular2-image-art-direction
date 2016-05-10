import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2AppAppComponent } from '../app/angular2-app.component';

beforeEachProviders(() => [Angular2AppAppComponent]);

describe('App: Angular2App', () => {
  // it('should create the app',
  //     inject([Angular2AppAppComponent], (app: Angular2AppAppComponent) => {
  //   expect(app).toBeTruthy();
  // }));

  // it('should have as title \'angular2-app works!\'',
  //     inject([Angular2AppAppComponent], (app: Angular2AppAppComponent) => {
  //   expect(app.title).toEqual('angular2-app works!');
  // }));
});
