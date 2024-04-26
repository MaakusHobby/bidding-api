const defaults = require(`${__dirname}/defaults`);
const environment = process.env.NODE_ENV;
let activeConfig;

try {
    activeConfig = require(`${__dirname}/${environment}`);
  } catch (e) {
    if (/Cannot find module/i.test(e.message)) {
        // console.warn(e);
        activeConfig = defaults;
    }

    console.warn("Used default config");
  }

  module.exports = activeConfig;