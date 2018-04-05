const test=require('tape');
const logic=require('./../public/js/logic.js');



//test for logic

// //test  connect function
// test("test for connect function ", (t)=>{
//   const acual= logic.lastWord('string word') ;
//   const expected= 'word';
//   t.equal(acual, expected, "function should equal word");
//   t.end();
// });
//
// //test  filterArray function
// test("test for connect function ", (t)=>{
//   const acual= logic.filterArray(['ten','two','twelve'], 'tw') ;
//   const expected= ['two','twelve'];
//   t.equal(acual, expected, "function should equal ['two','twelve']");
//   t.end();
// });
//
// //test getFirstFive function
// test("test for connect function ", (t)=>{
//   const acual= logic.getFirstFive(['ten','two','twelve','tin','tree','three']) ;
//   const expected= ['ten','two','twelve','tin','tree'];
//   t.equal(acual, expected, "function should equal ['ten','two','twelve','tin','tree'] ");
//   t.end();
// });
//
//
// //test  connect function
// test("test for connect function ", (t)=>{
//   const acual= logic.lastWord('string word') ;
//   const expected= 'word';
//   t.equal(acual, expected, "function should equal word");
//   t.end();
// });
//
//
// //test for handler


//test  filterArray function
// test("test for filterArray function ", (t)=>{
//   const acual= logic.filterArray(["a","b","aa","ba"],"a") ;
//   const expected= ["a","aa"];
//   t.deepEqual(acual, expected,'function should equal '+expected)
//   t.end();
// });
// test("test for filterArray function ", (t)=>{
//   const acual= logic.filterArray([],"a") ;
//   const expected= [];
//   t.deepEqual(acual, expected, 'function should equal []');
//   t.end();
// });



//test  getFirstFive function
// test("test for filterArray function ", (t)=>{
//   const acual= logic.getFirstFive(["1","2","3","4","5","6","7","8","9","10","11"]) ;
//   const expected= ["1","2","3","4","5","6","7","8","9","10"];
//   t.deepEqual(acual, expected,'function should equal '+expected)
//   t.end();
// });
//
// test("test for filterArray function ", (t)=>{
//   const acual= logic.getFirstFive(["1"]) ;
//   const expected= ["1"];
//   t.deepEqual(acual, expected,'function should equal '+expected)
//   t.end();
// });
//
// test("test for filterArray function ", (t)=>{
//   const acual= logic.getFirstFive([]) ;
//   const expected= [];
//   t.deepEqual(acual, expected,'function should equal '+expected)
//   t.end();
// });

// test  lastWord function
test("test for filterArray function ", (t)=>{
  const acual= logic.lastWord("hello world") ;
  const expected= "world";
  t.deepEqual(acual, expected,'function should equal '+expected)
  t.end();
});

test("test for filterArray function ", (t)=>{
  const acual= logic.lastWord("hello World") ;
  const expected= "world";
  t.deepEqual(acual, expected,'function should equal '+expected)
  t.end();
});
test("test for filterArray function ", (t)=>{
  const acual= logic.lastWord("hello World again") ;
  const expected= "again";
  t.deepEqual(acual, expected,'function should equal '+expected)
  t.end();
});

test("test for filterArray function ", (t)=>{
  const acual= logic.lastWord("hello World Again") ;
  const expected= "again";
  t.deepEqual(acual, expected,'function should equal '+expected)
  t.end();
});
