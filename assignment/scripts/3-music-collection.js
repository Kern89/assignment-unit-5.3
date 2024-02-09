console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, what, who, when) {
  collection.push( {
    artist: who,
    title: what,
    yearPublished: when,
  } )
  return collection[collection.length-1]
}

//function to return newest addition to myCollection array
function returnNew() {
  console.log(myCollection[myCollection.length-1]);
  return myCollection[myCollection.length-1]
}
addToCollection(myCollection, 'Rags To Rufus', 'Rufus and Chaka Khan', '1973')
returnNew()
addToCollection(myCollection, 'Album 2', 'Artist 2', '1977')
returnNew()
addToCollection(myCollection, 'Album 3', 'Artist 3', '1965')
returnNew()
addToCollection(myCollection, 'Album 4', 'Artist 4', '1973')
returnNew()
addToCollection(myCollection, 'Album 5', 'Artist 5', '1956')
returnNew()
addToCollection(myCollection, 'Album 6', 'Artist 6', '1983')
returnNew()
console.log(myCollection);

function showCollection(collection) {

}

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
