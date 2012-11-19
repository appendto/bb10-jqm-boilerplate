# Blackberry 10 jQuery Mobile Boilerplate
The code in this repository is a boilerplate for getting started with developing Backbone.js, jQuery Mobile applications.

To get started just clone the repository locally.

```shell
git clone https://github.com/appendto/bb10-jqm-boilerplate/
```

This code is also built with [anvil.js](http://appendto.github.com/anvil.js/). Anvil is a build system for JavaScript.

To get started with anvil run...

```shell
npm install -g anvil.js
```

Then you'll be able to run the following for a basic build...

```shell
anvil
```

This copies the code from the `src` directory into the `lib` directory, and also runs `anvil.docco` and outputs
documentation to the `docs` folder.

You can also run.

```shell
anvil --ci --host
```

This will run anvil in **Continuous Integration** mode and host the site at **localhost:3080**. Anytime a change is made,
the web browser will refresh automatically.

**NOTE:** Outside of Windows, the best way to run node.js is through [nvm](https://github.com/creationix/nvm). 
Follow their instructions to get up and running with nvm.
