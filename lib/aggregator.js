"use strict";
let Parser = require('rss-parser');

let arr_rss_url = [
  'https://www.liga.net/news/rss.xml',
  '',
  ''
];


class Aggregator {
  getNews(arr_rss_url) {
    let parser = new Parser();
    let obj_news = {
      arr_news: []
    };
    arr_rss_url.forEach(function(item, index, array) {
      (async () => {
        let obj = await parser.parseURL(item);
        console.log(obj);
      })();
        console.log(item, index)
    })
  }  
}

module.exports = Aggregator;