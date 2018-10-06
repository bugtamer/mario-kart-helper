# [Angular Material](https://material.angular.io) configuration

## Table Of Content

- 1 Install Angular Material, Angular CDK and Angular Animations
- 2 Create Angular Material config file
- 3 Configure animations
- 4 Import the component modules
- 5 Include a prebuilt theme
- 6 Gesture Support
- 7 Add Material Icons
- 8 Configuring SystemJS

[Source (2018-10-5)](https://material.angular.io/guide/getting-started)

***

## 1 Install Angular Material, Angular CDK and Angular Animations

- Change to the project folder
- `$ npm install --save @angular/material @angular/cdk @angular/animations`

## 2 Create Angular Material config file

- Its purpose is to hold all the Angular Material dependencies
- This allows us to avoid messing up our `app.module.ts`
- So let's create a [TypeScript](http://www.typescriptlang.org/) file (ts)

  **example**

  `mario-kart-helper/src/app/angular-material.ts`

```typescript
1  import { NgModule } from '@angular/core';
2
3  @NgModule({
4      imports: [ ],
5      exports: [ ]
6  })
7
8  export class AngularMaterialModule { }
```

- Update `mario-kart-helper/src/app/app.module.ts` so that it imports `AngularMaterialModule`

  **example**

  `mario-kart-helper/src/app/app.module.ts`

```typescript
01  import { BrowserModule } from '@angular/platform-browser';
02  import { NgModule } from '@angular/core';
03  import { AngularMaterialModule } from './angular-material';
04
05  import { AppComponent } from './app.component';
06
07  @NgModule({
08      declarations: [
09        AppComponent
10      ],
11      imports: [
12        BrowserModule,
13        AngularMaterialModule
14      ],
15      providers: [],
16      bootstrap: [AppComponent]
17  })
18  export class AppModule { }
```

- Be sure to import the Angular Material modules after Angular's `BrowserModule`, as the import order matters for *NgModules*.

  **Pay close attention to** lines **3** and **13**

## 3 Configure animations

- add `import {BrowserAnimationsModule} from '@angular/platform-browser/animations';` and `imports: [BrowserAnimationsModule],` to `angular-material.ts`

  **example**

  `mario-kart-helper/src/app/angular-material.ts`

```typescript
1  import { NgModule } from '@angular/core';
2  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
3
4  @NgModule({
5      imports: [BrowserAnimationsModule],
6      exports: [BrowserAnimationsModule]
7  })
8
9  export class AngularMaterialModule { }
```

  **Pay close attention to** lines **2**, **5** and **6**


## 4 Import the [component modules](https://material.angular.io/components/categories)

  **example**

  `mario-kart-helper/src/app/angular-material.ts`

```typescript
01  import { NgModule } from '@angular/core';
02  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
03  import { MatButtonModule, MatCheckboxModule } from '@angular/material';
04
05  @NgModule({
06      imports: [
07          BrowserAnimationsModule,
08          MatButtonModule,
09          MatCheckboxModule
10      ],
11
12      exports: [
13          BrowserAnimationsModule,
14          MatButtonModule,
15          MatCheckboxModule
16      ],
17  })
18
19  export class AngularMaterialModule { }
```

## 5 Include a prebuilt theme

- if you are using the Angular CLI, add `@import "~@angular/material/prebuilt-themes/deeppurple-amber.css";` to `styles.css`
- Otherwise, you can include `<link>` element in the `index.html`
- [Theming guide](https://material.angular.io/guide/theming)

## 6 Gesture Support

- Some components depend on [HammerJS](https://hammerjs.github.io/) for gestures.
- `$ npm install --save hammerjs`
- After installing, import it on your app's entry point (e.g. `src/main.ts`): 
`import 'hammerjs';`

## 7 Add Material Icons

- To use the `mat-icon` component ([Material Design Icons](https://material.io/icons/)), load the icon font in the `index.html`.
- `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`
- [Material Icons Guide](https://google.github.io/material-design-icons/).

## 8 Configuring [SystemJS](https://github.com/systemjs/systemjs)

- Configurable module loader enabling backwards compatibility workflows for ES modules in browsers.
- See [appendix-configuring-systemjs](https://material.angular.io/guide/getting-started#appendix-configuring-systemjs)
