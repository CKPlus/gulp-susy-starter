gulp-susy-starter
============
Starter Gulp + Susy project with examples.

Includes the following tools, tasks, and workflows:
- [Susy](http://susy.oddbird.net/) (Powerful grid system)
- [SASS](http://sass-lang.com/) (super fast libsass with [source maps](https://github.com/sindresorhus/gulp-ruby-sass#sourcemap), and [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer))
- [BrowserSync](http://browsersync.io) for live reloading and a static server

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install npm dependencies
```
npm install
```

This runs through all dependencies listed in `package.json` and downloads them to a `node_modules` folder in your project directory.

### Install bower components
To install susy and breakpoint components
```
bower install
```


### The `gulp` command
To run the version of gulp installed local to the project, in the root of your this project, you'd run

```
gulp
```

or

```
npm start
```
