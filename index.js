const asyncFileReader = require('./utils/asyncFileReader');


(async function() {
  const pathToBookmarks = './bookmarks-2021-03-02.json'
  let bookmarks = await asyncFileReader(pathToBookmarks)
}())