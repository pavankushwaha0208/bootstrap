// 
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector("div").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhttp.send(); // Corrected this line by adding parentheses to call the send function
