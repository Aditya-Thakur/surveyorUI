// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backendUrl: 'http://192.168.43.233:3000/',
  questionCategories: [ {
      name: "Short Answer",
      alias: "SA",
      icon: "short_text"
    },{
      name: "Long Answer",
      alias: "LA",
      icon: "view_headline"
    }, {
      name: "Multiple Choice",
      alias: "MC",
      icon: "radio_button_checked"
    },{
      name: "Checkboxes",
      alias: "CB",
      icon: "check_box"
    },{
      name: "Rating",
      alias: "R",
      icon: "star_half"
    }
  ],
  currentUser : {
    id: '',
    fullName : '',
    email : '',
    gender : '',
    dob : new Date(),
    mobileNumber : ''
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
