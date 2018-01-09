# WordPress skeleton

Base theme used: [underscores](https://underscores.me)

# Frontend build tools

## Instructions for setup:

Make sure you have node.js and npm (package manager) installed globally - you will only have to do this once: https://www.npmjs.com/get-npm

When you pull the theme, navigate to your theme folder in your terminal and run following commands, which will install your gulp tools:

- ```npm install gulp --save-dev```
- ```npm install gulp-sass --save-dev```
- ```npm install browser-sync --save-dev```
- ```npm install --save-dev gulp-uglify```
- ```npm install gulp-clean-css --save-dev```
- ```npm install gulp-autoprefixer --save-dev```
- ```npm install --save-dev gulp-load-plugins```

You are ready to go!

## Instructions for setup:

To compile sass run ```gulp``` from your theme folder. The gulp command will automatically watch for all other tasks like browsersync.



## Directory structure

All development should occur inside the ```src/``` directory. Imagery, css and js are all moved to top level folders after being run through the build tools.

### Images

### JS

### SCSS

#### Configuration

Common configuration is set inside ```src/scss/_config.scss```. This specifies breakpoints, typography and brand colours pallete as well as any other variables used throughout a theme. Any consistently reused value should be added here.

#### Base

Element styles that all other theme scss should inherit from should be added here. The elements partial is for element node and pseudo-classes only. No other selectors should be present.

#### Components

Any re-usable CSS component/module should be added as a separate partial inside ```src/scss/components``` and documented with details describing any manipulations whether through JS or media queries. Components should never have a container with a fixed width. This should be addressed through the use of Layouts.

#### Layouts

Any layout structure that positions components on a page should be added here. Additionally, skeleton and grid structure belongs here. Presentation styles should not exist in this directory and should be restricted to box-model and positioning.

#### Pages

In the case that page specific styles are required they should be added here. This should only ever happen if a component or layout modifier is not suitable.

#### Development

All sass partials created should be loaded by adding an import to the ```_core.scss partial``` in the relevant section. An addition to the table of contents at the top of this file is also required.


## Tasks

The default task can be run using ```gulp```. The following tasks are executed when run:

- sass
- browser-sync
- images

### sass

This task will compile all top level sass files from ```src/scss/``` to ```css/```
By default this task will run through [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) to ensure output is kept optimal and relevant. Browsersync reloading will occur at the end of the task.

### browser-sync

[browser sync](http://www.browsersync.io/) will run for the host specified in PATHS.localhost at the top of the gulpfile. It is recommended to change this value for your environment setup if you wish to use it. This task is executed on ```gulp``` so does not need to be run manually.

### imagemin

This task will run all imagery from ```src/images/template``` through an optimisation process. Currently this is using [imagemin](https://www.npmjs.com/package/gulp-imagemin). The output files will be located at ```images/template```
