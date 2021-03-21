"use strict";

var Aggregator = require('../index.js');

describe('Aggregator', function() {
  let parser = new Aggregator();
  it('should save without error', function(done) {
    let Parser = require('rss-parser');
    let parser = new Parser();
    (async () => {
      let obj = await parser.parseURL('https://www.liga.net/news/rss.xml');
      console.log(obj);
      done()
    })();

  });
});