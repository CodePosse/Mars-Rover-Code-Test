# Nasa Mars Rover Interview Code Challenge

So... every company on earth :clown_face: asks you to do this coding challenge to go get images :camera_flash: from the Red Dead Rovers on Mars using the NASA :rocket: APIs. As if they didn't know this is posted like everywhere on the web so I am. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Live Demo
[live demo](https://codeposse.github.io/Mars-Rover-Code-Test/dist/)

## Known issues :memo:

1. :bug: You may be asked for an image of the day, well, guess what, there is no such thing, the API does not have that, it is out of date. I suppose I could have generated a random image display, but hey, I have put more effort in to it than necessary.

2. :bug: Lots of cameras :camera_flash: are offline, or out of focus, so your mileage may vary. 

3. :rage: Dude, TONS of images, so I limited it to 4 at a time. Check it out here: `\src\app\images\rover\rover.component.ts:80` (that's line 80)

## Installation :construction:

1. Get [Node](https://nodejs.org/en/download/)

2. Get the Angular CLI for 8.x globally `npm install -g @angular/cli`

3. Clone the repo `git clone https://github.com/CodePosse/Mars-Rover-Code-Test.git` in a work folder.

4. Type `npm install` inside the project and get coffee while it does it's thing. Node is a [Rube Goldberg device](https://www.digitaltrends.com/cool-tech/best-rube-goldberg-machines/), but pays well...

5. GET YOUR OWN DAMNED API HERE: [https://api.nasa.gov/](https://api.nasa.gov/) and change it here: `\src\app\services\api.service.ts:9` (that's line 9)

6. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `ng build --prod` flag for a production build. Using the flag `ng build --open` auto opens your browser and refreshes on all changes.

7. :wrench: Update the STYLES, you may have to do some tweaks. I was lazy here :beers:

8. Send me a tip by sponsoring me here or via PayPal [https://www.paypal.com/paypalme2/testshoot](https://www.paypal.com/paypalme2/testshoot)

9. Let me know any other JS/Angular code challenges you come across by emailing me from: [http://codeposse.github.io/](http://codeposse.github.io/) and I will list them on my profile and here. I already have a few.

10. Read my blog, I am lonely [https://medium.com/@timhunold](https://medium.com/@timhunold)

## Development server :construction:

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development with browser auto-opened :construction:

Same as above, but when you run `ng serve --open` with the addition of the `--open` argument, your default browser will open automatically.

## Adding pagination :construction_worker:

If you navigate to `\src\app\images\rover\rover.component.html:30` (that's line 30) you will be able to turn pagination on. For now we just get the first 4 images.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build



## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
