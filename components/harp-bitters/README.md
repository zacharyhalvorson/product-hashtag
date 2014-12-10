# harp-bitters

> Add a dash of predefined style to get your [Bourbon](http://bourbon.io/) stylesheets started off in the right direction.

## Dependencies

* [Node.js](http://nodejs.org/) – _Server-side JavaScript runtime_
* [Harp](http://harpjs.com/) – _The static web server with built-in preprocessing_

## Install

To install Bitters, you can [download this repository](https://github.com/harp/bitters/archive/master.zip) or use the  [Component](http://component.io) package manager.

```bash
npm install -g component
component install harp/bitters
```

```bash
harp install bitters
```

Your project will look something like this…

```
myproject/                  <-- Your project root (or public dir if in framework-mode)
  |- components/            <-- Harp puts components here
  |   +- harp-bourbon/      <-- Where Bourbon gets installed
  |   +- harp-bitters/      <-- Where this lib gets installed
  |       …
  |- main.scss              <-- Where you reference Bourbon and Bitters
  +- index.jade             <-- Where you reference main.css
```

## Link

Now, from within a `.scss` file in your project, you can `@import` Bourbon and Bitters:

```scss
@import "components/harp-bourbon/scss/bourbon";
@import "components/harp-bitters/scss/bitters";
```

Or, just a portion of either:

```scss
@import "components/harp-bourbon/scss/bourbon";
@import "components/harp-bitters/scss/variables";
@import "components/harp-botters/forms";
```

## A note on `@extends`

Bitters makes use of `@extends` in Sass, which isn’t supported in [libsass](http://libsass.org), and therefore Harp yet. This means `%button`, `%default-ul` and `%default-ol` can only be used with real classes (`.button`, `.default-ul`, `.default-ol`) in the meantime. This will be reverted as soon as libsass supports this feature, which should be very soon.

## License

This component is [Bitters](http://github.com/thoughtbot/bitters), which is Copyright © 2013 thoughtbot and MIT licensed.
