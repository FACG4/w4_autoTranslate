const test=require('tape');
const logic=require('./../public/js/logic.js');



//test for logic

//test  connect function
test("test for connect function ", (t)=>{
  const acual= logic.lastWord('string word') ;
  const expected= 'word';
  t.equal(acual, expected, "function should equal word");
  t.end();
});

//test  filterArray function
test("test for connect function ", (t)=>{
  const acual= logic.filterArray(['ten','two','twelve'], 'tw') ;
  const expected= ['two','twelve'];
  t.equal(acual, expected, "function should equal ['two','twelve']");
  t.end();
});

//test getFirstFive function
test("test for connect function ", (t)=>{
  const acual= logic.getFirstFive(['ten','two','twelve','tin','tree','three']) ;
  const expected= ['ten','two','twelve','tin','tree'];
  t.equal(acual, expected, "function should equal ['ten','two','twelve','tin','tree'] ");
  t.end();
});


//test  connect function
test("test for connect function ", (t)=>{
  const acual= logic.lastWord('string word') ;
  const expected= 'word';
  t.equal(acual, expected, "function should equal word");
  t.end();
});


//test for handler
