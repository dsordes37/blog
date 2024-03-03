// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  topNewsUrl: 'https://newsapi.org/v2/top-headlines?apiKey=14aeac4e5260419b8b4dd7847b0f6405',
  searchNewsUrl: 'https://newsapi.org/v2/everything?apiKey=14aeac4e5260419b8b4dd7847b0f6405'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
