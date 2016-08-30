Vons Sausage Shop
-----------------

[![build status](https://travis-ci.org/AndyGauge/sausage.svg)](https://travis-ci.org/AndyGauge/sausage)

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

Uses Zurb Foundation Zurb Template
- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Dev Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)
- [PhantomJS](https://phantomjs.org/)

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/andygauge/sausage von
```

Install PhantomJS globally

```bash
sudo npm install -g phantomjs-prebuilt
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd von
npm install
bower install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```bash
npm start &
```

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.
