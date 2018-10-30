import { FirebaseApp } from "angularfire2";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBCm9re1aXpkNI33t-doAHvlCOmf-bM6xQ",
    authDomain: "fir-db-4d931.firebaseapp.com",
    databaseURL: "https://fir-db-4d931.firebaseio.com",
    projectId: "fir-db-4d931",
    storageBucket: "fir-db-4d931.appspot.com",
    messagingSenderId: "238514388721"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
