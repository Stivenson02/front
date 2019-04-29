// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  LOGOUT: 'http://localhost:4200/logout',
  API_URL: 'http://192.168.0.44:8000/',
  API_CLIENT_SECRET: 'hUXu8K0AiaDTLAhvLpsFiS4ZFAAH327hMeJeAJpY',
  API_CLIENT_ID: '6',
  API_GRANT_TYPE:'password'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
