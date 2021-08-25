module.exports = {
<<<<<<< HEAD
  globalSetup: "<rootDir>/jest.setup.js",
=======
  globalSetup: "<rootDir>/jest.setup.js", // this line is the only change here
>>>>>>> 3aade4e57822a4a955d75dd8c253d415de27a254
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.js"
  },
<<<<<<< HEAD

  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json'
  ],

=======
  moduleFileExtensions: ["ts", "js", "vue", "json"],
>>>>>>> 3aade4e57822a4a955d75dd8c253d415de27a254
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  },

  collectCoverage: true,

  collectCoverageFrom: [
<<<<<<< HEAD
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/store/**/*.js'
  ],

  testEnvironment: 'jsdom',
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel'
}
=======
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/**/*.vue"
  ],
  testEnvironment: "jsdom"
};
>>>>>>> 3aade4e57822a4a955d75dd8c253d415de27a254
