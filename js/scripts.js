//bsiness logic






//User interface logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
     var inputNumbers = $("input#number").val();
    console.log(inputNumbers);
     var inputNumbersArr = inputNumbers.split("");
    console.log(inputNumbersArr);
    alert(inputNumbers);
     var numbersOfInt = inputNumbersArr.length;
    console.log(numbersOfInt);
    alert(numbersOfInt);

  for (index=0; index<numbersOfInt;index ++) {

  



  }






    //var imputNumberArray = inputNumber.split("");
    //alert(imputNumberArray);
    //var numberOfIntegers = imputNumberArray.length;

  });
});
