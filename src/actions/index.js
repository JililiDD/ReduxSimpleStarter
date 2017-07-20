//S4T45: index.js in actions folder contains all the actions we make

export function selectBook(book){
  //S4T45: console.log('A book has been selected', book.title);

  //S4T46: selectBook is an ActionCreator, it needs to return an action, an object with a type property.
  //an action should always have a type parameter. payload is an convention 
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}