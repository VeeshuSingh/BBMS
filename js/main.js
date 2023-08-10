var ref=new Firebase("https://bbms-b073b-default-rtdb.firebaseio.com")
  var config = {
    apiKey: "AIzaSyAhgsl7wRyd5he-iFCgOzc5jnY5eQakpBs",
    authDomain: "bbms-b073b.firebaseapp.com",
    databaseURL: "https://bbms-b073b-default-rtdb.firebaseio.com",
    projectId: "bbms-b073b",
    storageBucket: "bbms-b073b.appspot.com",
    messagingSenderId: "541438261369",
    appId: "1:541438261369:web:551625638aa40713503ca8"
  };
  firebase.initializeApp(config);
var OrdersRef = firebase.database().ref('Orders');

document.getElementById('orderForm').addEventListener('submit', submitForm);
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var number = getInputVal('number');
  var product = getInputVal('product');


  // Save message
  saveMessage(name, number, product);



  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },7000);

  // Clear form
  document.getElementById('orderForm').reset();




  }
  function getInputVal(id) {
    // body...
    return document.getElementById(id).value;
  }

  function saveMessage(name, number, product){
  var newMessageRef = OrdersRef.push();
  newMessageRef.set({
    name: name,
   number: number,
   product: product
  });
}
function myfunc(){

var a = document.getElementById("number").value;
    
     if(a.length()!=11){
          alert(" not valid ");
    }
  

}