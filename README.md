# Matt Pitts Website

This project is meant to be a demonstration of some of my abilities in the software development space. It consists of a fully functional Angular application and also builds and deploys into a hosting environment completely with
Github Actions. You can see the results of this project's hosted output at [my site](https://matt.gopitts.net)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.3.

## Noteworthy Items

The following are some of the noteworthy things that I have included in this project from CI/CD perspective.

- Use of the Github Actions [cache plugin](https://github.com/actions/cache) to have separated build jobs with some shared artifacts
- Code coverage reports generated and used to analyze code coverage on pull-request builds
- [CodeQL](https://codeql.github.com/) setup within GitHub to perform code quality analysis on commit

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
