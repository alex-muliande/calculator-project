{/* <script>
function insert(num){
  document.form.textview.value = document.form.textview.value+num;
}
function clean(){
    document.form.textview.value="";
}
function back(){
    var exp=document.forms.textview.value;
    document.form.textview.value=exp
    substring(0,exp.length-1)
}
</script> */}
var add = function(number1, number2) {
    return number1 + number2
  };
  
  var number1 = parseInt(prompt("Enter a number:"))
  var number2 = parseInt(prompt("Enter another number:"))
  var result = add(number1, number2);
  alert(result);

  var subract = function(number1, number2) {
    return number1 - number2
  };
  
  var number1 = parseInt(prompt("Enter a number:"))
  var number2 = parseInt(prompt("Enter another number:"))
  var result = subract(number1, number2);
  alert(result);

  var multiplication = function(number1, number2) {
    return number1 * number2
  };
  
  var number1 = parseInt(prompt("Enter a number:"))
  var number2 = parseInt(prompt("Enter another number:"))
  var result = multiplication(number1, number2);
  alert(result);

  var divide = function(number1, number2) {
    return number1 / number2
  };
  
  var number1 = parseInt(prompt("Enter a number:"))
  var number2 = parseInt(prompt("Enter another number:"))
  var result = divide(number1, number2);
  alert(result);





