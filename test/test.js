const test=require('tape');
const logic=require('./../public/js/logic.js');



// test for logic

//test  lastWord function
test("test for lastWord function ", (t)=>{
  const acual= logic.lastWord('string word')
  const expected= ''
  t.equal(acual, expected, "function should equal word");
  t.end();
});

//test  filterArray function
test("test for filterArray function ", (t)=>{
  const acual= logic.filterArray(['ten','two','twelve'], 'tw') ;
  const expected= ['two','twelve'];
  t.deepEqual(acual, expected, "function should equal ['two','twelve']");
  t.end();
});

//test getFirstTen function
test("test for getFirstTen function ", (t)=>{
  const acual= logic.getFirstTen(['ten','two','twelve','tin','tree','three']) ;
  const expected = ['ten', 'two', 'twelve', 'tin', 'tree', 'three'];
  t.deepEqual(acual, expected, "function should equal ['ten','two','twelve','tin','tree'] ");
  t.end();
});

//test for handler

// test  filterArray function
test("test for filterArray function ", (t)=>{
  const acual= logic.filterArray(["a","b","aa","ba"],"a") ;
  const expected= ["a","aa"];
  t.deepEqual(acual, expected,'function should equal '+expected)
  t.end();
});
test("test for filterArray function ", (t)=>{
  const acual= logic.filterArray([],"a") ;
  const expected= [];
  t.deepEqual(acual, expected, 'function should equal []');
  t.end();
});



// test  getFirstTen function
test("test for getFirstTen function ", (t)=>{
  const acual= logic.getFirstTen(["1","2","3","4","5","6","7","8","9","10","11"]) ;
  const expected= ["1","2","3","4","5","6","7","8","9","10"];
  t.deepEqual(acual, expected,'function should equal '+expected)
  t.end();
});

test("test for getFirstTen function ", (t)=>{
  const acual= logic.getFirstTen(["1"]) ;
  const expected= ["1"];
  t.deepEqual(acual, expected,'function should equal '+expected)
  t.end();
});

test("test for getFirstTen function ", (t)=>{
  const acual= logic.getFirstTen([]) ;
  const expected= [];
  t.deepEqual(acual, expected,'function should equal '+expected)
  t.end();
});

// test  lastWord function
test("test for lastWord function ", (t)=>{
  const acual= logic.lastWord("hello world") ;
  const expected= "world";
  t.deepEqual(acual, expected,'function should equal '+expected)
  t.end();
});

test("test for lastWord function ", (t)=>{
  const acual= logic.lastWord("hello World") ;
  const expected= "world";
  t.deepEqual(acual, expected,'function should equal '+expected)
  t.end();
});
test("test for lastWord function ", (t)=>{
  const acual= logic.lastWord("hello World again") ;
  const expected= "again";
  t.deepEqual(acual, expected,'function should equal '+expected)
  t.end();
});

test("test for lastWord function ", (t)=>{
  const acual= logic.lastWord("hello World Again") ;
  const expected= "again";
  t.deepEqual(acual, expected,'function should equal '+expected)
  t.end();
});
