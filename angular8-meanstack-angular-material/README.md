# Angular8MeanstackAngularMaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

ERROR: 

1: Visual studio code cmd error: Cannot be loaded because running scripts is disabled on this system
https://stackoverflow.com/questions/56199111/visual-studio-code-cmd-error-cannot-be-loaded-because-running-scripts-is-disabl

2: Appears in the NgModule.exports of AngularMaterialModule, but could not be resolved to an NgModule, Component, Directive, or Pipe class.
    
  This likely means that the library (@angular/material/paginator) which declares MatPaginatorModule has not been processed correctly by ngcc, or is not compatible with Angular Ivy. Check if a newer version of the library is available, and update if so. Also consider checking with the library's authors to see if the library is expected to be compatible with Ivy.

  => open terminal  and restart "npm start"

3: @angular/material/index.d.ts' is not a module 
  import { MatDialogModule } from "@angular/material/dialog";
  //works fine


*Learn:
  Data blinding.
  Two Way blinding.
  View Child, Input, Output.
  Directive ,Pipe ,Service, Module.
  Router
