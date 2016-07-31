
# Bookeroo react
This is a small app built in React. The starting point was based on redux-starterkit project - even though I haven't used Redux in this version (coming soon). This starter kit provided a minimal-ish starting point with features I wanted in the app, namely ES6 support, Webpack, Bootstrap, React-router and ESLint. Another starting point I considered was Essential-react but opted for redux-starterkit for the more complete webpack config (read that: I failed miserably to setup bootstrap myself with webpack!). This is a [good place](http://andrewhfarmer.com/starter-project/) to compare different starter kits and the options they provide.

![alt tag](https://raw.githubusercontent.com/kabaros/bookeroo-react/master/bookeroo.png)


### The App
The app itself - for now - just provides a simple interface to add bookings, and displays these Bookings and allow the user to mark each booking as Seated.
I chose to show creating bookings and showing them on the same page. It seemed appropriate at this demo stage.

What's missing? A lot. Coming straight away is better validation for the Booking form. That's a P1. Then a lot of other nice to have.

To run the app, clone the repo. Then do `npm install` and `npm run start -s`

### Tests
The tests are running continously while on the Dev server. But you can run it separately using `npm run test` which will provide also a code coverage report using [NYC](https://github.com/bcoe/nyc).

I chose to write a test on the top level form (controller view) - BookingForm.test.js - and to render it using Enzyme's mount (rather than shallow). This is basically an integration test rather than a unit test as it runs and asserts the various child components. Given that React community encourages developers to have a lot of dumb components and only few top level Smart ones, it seems appropriate for me to test at the level of the smart component, rather than having a lot of small brisk tests that only assert html elements.

I also didn't do TDD - which I like doing and find it natural for business logic but pretty awkward for mainly visual components.

![alt tag](https://raw.githubusercontent.com/kabaros/bookeroo-react/master/coverage.png)