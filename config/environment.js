/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'syllabus',
    podModulePrefix: 'syllabus/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy : {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' http://cdnjs.cloudflare.com http://codeatuni.netlify.com",
      'font-src': "'self' https://fonts.gstatic.com",
      'connect-src': "'self' http://codeatuni.netlify.com",
      'img-src': "'self' http://www.zerowasteweek.co.uk",
      'frame-src': "'self' http://localhost:4301 http://codeatuni.netlify.com",
      'style-src': "'self' 'unsafe-inline' http://cdnjs.cloudflare.com https://fonts.googleapis.com",
      'media-src': "'self'"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.rootURL = 'https://girls-in-steam.herokuapp.com/';
    ENV.contentSecurityPolicy['connect-src'] = 'https://girls-in-steam.herokuapp.com/';
  }

  return ENV;
};
