# [PrimeNG charts v6](https://www.primefaces.org/primeng-6.1.6/#/chart) configuration

## Angular CLI commands

**Note:** :warning: :bangbang: `@angular/animations` are not required, [it was already installed with Angular Material](./material_angular/material_angular.md)

```bash
$ npm install primeng --save
$ npm install primeicons --save
$ npm install @angular/animations --save
$ npm install chart.js --save
$ npm install font-awesome --save
```

**`angular.json` should have these additions**

```json
[...]
"styles": [
    [...],
    "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/nova-light/theme.css",
    "node_modules/primeng/resources/primeng.min.css"
],
"scripts": [
    [...],
    "node_modules/chart.js/dist/Chart.js"
]
[...]
```

**otherwise `index.html` should have these additions**

```html
<head>
  [...]
  <link rel="stylesheet" type="text/css" href="/node_modules/primeicons/primeicons.css" />
  <link rel="stylesheet" type="text/css" href="/node_modules/primeng/resources/themes/nova-light/theme.css" />
  <link rel="stylesheet" type="text/css" href="/node_modules/primeng/resources/primeng.min.css" />
  [...]
</head>
<body>
  [...]
  <script src="node_modules/chart.js/dist/Chart.js"></script>
</body>
```

## Troubleshooting

It is thrown the following message: `ERROR ReferenceError: "Chart is not defined"` when `chart.js` dependency is not present in the project in either `index.html` or `angular.json`.

## PrimeNG resources

- [PrimeNG by PrimeFaces.org](https://www.primefaces.org/#primeng)
- [PrimeNG Get Started](https://www.primefaces.org/primeng-6.1.6/#/setup)
- [PrimeNG charts 6](https://www.primefaces.org/primeng-6.1.6/#/chart)
- [Primeng with Angular 6 example from scratch with tutorials | Primeng Angular Tutorial Example](https://www.cloudhadoop.com/2018/07/primeng-with-angular-6-example-from.html)
- [Using primeng with angular 4](http://www.thejavageek.com/2017/07/31/using-primeng-angular-4/)

## Some alternatives to PrimeNG

- [Angular 7 UI Components (Angular 7 Chart) from jQWidgets.com](https://www.jqwidgets.com/angular/angular-chart/#https://www.jqwidgets.com/angular/angular-chart/angular-chart-spiderchart.htm)
- [Angular Chart](http://jtblin.github.io/angular-chart.js/) its dependencies are (2018-11-14):
  - [AngularJS](https://angularjs.org/) (requires at least 1.4.x) :warning: :bangbang:
  - [Chart.js](https://www.chartjs.org/) (requires Chart.js 2.x).
