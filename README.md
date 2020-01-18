
# Nasa Mars Rover Interview Code Challenge

So... every hack company on earth asks you to do this lame challenge to go get images from the Red Dead Rovers on Mars using the NASA APIs. As if they didn't know this is like everywhere on the web. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Known issues

 1. You may be asked for an image of the day, well, guess what, there is no such thing, the API does not have that
 2. Lots of cameras are offline, or out of focus, so your mileage may vary.
 3. Dude, TONS of images, so I limited it to 4 at a time. Check it out here: `\src\app\images\rover\rover.component.ts:80`
 4. GET YOUR OWN DAMNED API HERE: [https://api.nasa.gov/](https://api.nasa.gov/) and change it here: `\src\app\services\api.service.ts:9`

## Installation

 1. Get Node
 2. Get the Angular CLI for 8.x
 3. Clone the repo
 4. Type `npm install` and get coffee while it does it's thing.
 5. Run the development server following the info below
 6. Send me a tip by sponsoring me here os via PayPal [https://www.paypal.com/paypalme2/testshoot](https://www.paypal.com/paypalme2/testshoot)
 7. Let me know any other code challenges you come across by emailing me from: [http://codeposse.github.io/](http://codeposse.github.io/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development with browser auto-opened

Same as above, but when you run `ng serve --open` with the addition of the `--open` argument, your default browser will open automatically.

## Adding pagination

If you navigate to `\src\app\images\rover\rover.component.html:30` you will be able to turn pagination on. For now we just get the first 4 images.

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