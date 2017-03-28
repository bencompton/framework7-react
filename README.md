# Framework7 React

[Framework7](http://framework7.io) is a JavaScript framework for building iOS and Material web and hybrid apps that are virtually indistinguishable from native apps. Framework7 React brings the attention to detail, ease of use, and great features of Framework7 to React. To see it in action, have a look at the [kitchen sink](https://bencompton.github.io/framework7-react/).

Note that Framework7 React is still very new, so more complex examples beyond the kitchen sink aren't available yet. In the meantime, if you're new to Framework7, you should have a look at the [full iOS / Material Design kitchen sinks](http://framework7.io), [the demo apps](http://framework7.io/apps/), and [the example layouts](http://framework7.io/examples/) to get a feel for Framework7 and what is possible.

## Getting started

  * [Installation Guide](http://framework7.io/react/installation.html)
  * [Starter App Templates](http://framework7.io/react/templates.html)
  * [App Layout](http://framework7.io/react/app-layout.html)
  * [Initialize App](http://framework7.io/react/init-app.html)
  * [Navigation Router](http://framework7.io/react/navigation-router.html)

## Docs

Documentation available at http://framework7.io/react/

## Kitchen Sink

Ensure that [gulp](https://www.npmjs.com/package/gulp) is installed globally, then run the following:

To build the framework itself:

```javascript
npm install
gulp
```

To build the kitchen sink:

```javascript
cd kitchen-sink
npm install
gulp
```

Here's a shortcut for building both after the above two steps have already been completed at least once:

```javascript
npm run build
```

Once the framework and kitchen sink are built, run the kitchen sink by launching kitchen-sink/index.html in a browser.

## Usage with Redux

Firstly, as the creator of [Redux points out](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.nfg6gm6yl), Redux is not a requirement for building apps with React. In turn, Redux is not a requirement for building apps with Framework7 React—it is designed to be perfectly usable either way. However, as your app grows beyond a certain level of complexity, it is definitely recommended that you consider Redux (or some other state management library like [MobX](https://github.com/mobxjs/mobx)). For more information about using Redux with Framework7 React, have a look at [Framework7 Redux](https://github.com/bencompton/framework7-redux).

## FAQ

#### Why does Framework7 React have its own router instead of just using React Router?

It turned out to be difficult to make the complex iOS page transition animation and page swipe-back functionality play nicely with [React Router](https://github.com/ReactTraining/react-router). While React’s abstracted DOM manipulation works well in most cases, it can actually get in the way when sophisticated animation and complex DOM manipulation are required. In many cases, it is often simpler to just use imperative DOM manipulation code and not even bother trying to coax React into performing such intricate DOM manipulation tasks. As a result, Framework7 React comes with a router that is custom-made to work in harmony with Framework7’s intricate page animation logic.

#### Can I use React Router with Framework7 React?

The short answer is yes, but animated page transitions will not work. It is recommended that you instead use the router that is built into Framework7 React. The router is still a work in progress, but the goal of the built-in router is to provide everything you need and leave no reason to use React Router. One important missing feature right now is support for the HTML5 History API with the browser back button and URL changes driving route changes.

#### Should I use React Native or Framework7 React for my project?

[React Native](https://facebook.github.io/react-native/) is designed for building native apps with React, and often requires writing Objective C, Swift and Java in addition to JavaScript. On the other hand, Framework7 React is designed for building web apps and hybrid apps (with Apache Cordova, etc.) that are virtually indistinguishable from native apps. The main advantages of Framework7 React are:

1. Ability to create mobile apps with a web development skill set (HTML, CSS, JavaScript) with no need to write Objective C, Swift or Java
2. Apps that can run on any device with a browser, not just iOS or Android devices
3. Option to install your app from a website or use it directly in a browser instead of installing from an app store

The main advantage of React Native is of course performance. Framework7 React is very fast, and is a great option in a lot of cases. However, there is no denying that native apps can have superior rendering performance, which is even more noticeable on older, slower devices. If your app has complex screens that must squeeze every last ounce of performance out of every device, but you still want to use React, then it is possible that React Native is a better fit for your project.

#### Why should I use Framework7 React instead of React library XYZ?

The main motivation for creating Framework7 React was the lack of React libraries that convincingly recreate the look and feel of iOS and Material in pixel-perfect detail with realistic animations, gestures, etc. If you want the benefits of a web app without having your app look like a web app, then Framework7 React might be a good choice for your project.

#### I would like to contribute an enhancement or fix to a component, but I don’t see the React component in the code. What gives?

Given that [Vue](https://vuejs.org) 2.0 and React are incredibly similar, it was decided that Framework7 React would automatically generate its React components from [Framework7 Vue’s](https://github.com/nolimits4web/Framework7-Vue) components. This makes it super easy to keep the two frameworks in sync and ensure that React and Vue users both get access to the same capabilities. In a nutshell, Vue components have `render` methods just like React components do, and just like in React, Vue component render methods call a `createElement` function and return the created elements for the framework to mount in the DOM and reactively update. Therefore, it is relatively simple to leverage the rendering logic in Vue components by substituting React’s createElement function for Vue’s createElement function. That is the basic principle at least. In practice, there is a bit more to it than that. It works surprisingly well, though, and many hours of testing have shown that rendering performance in Framework7 React is more or less equivalent to Framework7 Vue.
