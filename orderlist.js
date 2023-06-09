// validate form inputs before submitting data
function validateForm() {

    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var size = document.getElementById("size").value;
    var quantity = document.getElementById("quantity").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var price = document.getElementById("price").value;
    var total = document.getElementById("total").value;

    if (brand == "") {
        swal("Brand is required")
        return false;
    }

    if (model == "") {
        swal("Model is required")
        return false;
    }

    if (size == "") {
        swal("Size is required")
        return false;
    }

    else if(size < 1) {
        swal("Size must not be zeror or less than zero")
        return false;
    }

    if (quantity == "") {
        swal("Quantity is required")
        return false;
    } 

    if (name == "") {
        swal("Name is required")
        return false;
    }

    if (email == "") {
        swal("Email is required")
        return false;
    }

    if (contact == "") {
        swal("Contact is required")
        return false;
    }

    if (address == "") {
        swal("Address is required")
        return false;
    }

    else if (!email.includes("@")) {
        swal("Invalid email address");
        return false;
    }

    if (price == "") {
        swal("Price required")
        return false;
    }

    if (total == "") {
        swal("Total required")
        return false;
    }

    return true;
}
// function to show data
function showData() {
    var productList;
    if(localStorage.getItem("productList") == null) {
        productList = [];
    }

    else {
        productList = JSON.parse(localStorage.getItem("productList"));
    }

    var html = "";

    productList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.brand + "</td>";
        html += "<td>" + element.model + "</td>";
        html += "<td>" + element.size + "</td>";
        html += "<td>" + element.quantity + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.contact + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.price + "</td>";
        html += "<td>" + element.total + "</td>";
        html +=
        '<td><button onclick="deleteData(' +
        index + 
        ')" class="btn-btn">Delete</button><button onclick="updateData(' +
        index +
        ')" class="btn-btn1">Edit</button</td>';
        html +="</tr>"; 
        });

        document.querySelector("#crudTable tbody").innerHTML = 
        html;
}

// Loads all data when document or page loaded
document.onload = showData();

// function to add data to local storage
function AddData() {
    if(validateForm() == true) {
        var brand = document.getElementById("brand").value;
        var model = document.getElementById("model").value;
        var size = document.getElementById("size").value;
        var quantity = document.getElementById("quantity").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var contact = document.getElementById("contact").value;
        var address = document.getElementById("address").value;
        var price = document.getElementById("price").value;
        var total = document.getElementById("total").value;

        var productList;
    if(localStorage.getItem("productList") == null) {
        productList = [];
    } else {
        productList = JSON.parse(localStorage.getItem
        ("productList"));
    }

    productList.push({
        brand: brand,
        model: model,
        size: size,
        quantity: quantity,
        name: name,
        email: email,
        contact: contact,
        address: address,
        price: price,
        total: total,
    });

    localStorage.setItem("productList", JSON.stringify
    (productList));
    showData();
    document.getElementById("brand").value = "";
    document.getElementById("model").value = "";
    document.getElementById("size").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("address").value = "";
    document.getElementById("price").value = "";
    document.getElementById("total").value = "";
    }
}

// fucntion to delete Data from local storage

function deleteData(index) {
    var productList;
    if(localStorage.getItem("productList") == null) {
        productList = [];
    } else {
        productList = JSON.parse(localStorage.getItem
        ("productList"));
    }

    productList.splice(index, 1);
    localStorage.setItem("productList", JSON.stringify
    (productList));
    showData();
}

// function to update/edit data in local storage
function updateData(index){
    // submit button will hide and Update button will show for updating Data in Local Storage
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var productList;
    if (localStorage.getItem("productList") == null) {
        productList = [];
    } else {
        productList = JSON.parse(localStorage.getItem("productList"));
    }

    document.getElementById("brand").value = productList[index].brand;
    document.getElementById("model").value = productList[index].model;
    document.getElementById("size").value = productList[index].size;
    document.getElementById("quantity").value = productList[index].quantity;
    document.getElementById("name").value = productList[index].name;
    document.getElementById("email").value = productList[index].email;
    document.getElementById("contact").value = productList[index].contact;
    document.getElementById("address").value = productList[index].address;
    document.getElementById("price").value = productList[index].price;
    document.getElementById("total").value = productList[index].total;

    document.querySelector("#Update").onclick = function() {
        if(validateForm() == true) {
        productList[index].brand = document.getElementById("brand").value;
        productList[index].model = document.getElementById("model").value;
        productList[index].size = document.getElementById("size").value;
        productList[index].quantity = document.getElementById("quantity").value;
        productList[index].name = document.getElementById("name").value;
        productList[index].email = document.getElementById("email").value;
        productList[index].contact = document.getElementById("contact").value;
        productList[index].address = document.getElementById("address").value;
        productList[index].price = document.getElementById("price").value;
        productList[index].total = document.getElementById("total").value;

        localStorage.setItem("productList", JSON.stringify(productList));

        showData();

        document.getElementById("brand").value = "";
        document.getElementById("model").value = "";
        document.getElementById("size").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("address").value = "";
        document.getElementById("price").value = "";
        document.getElementById("total").value = "";

        document.getElementById("Submit").style.display = "block";
        document.getElementById("Update").style.display = "none";
        }
    }
}


//** DASHBOARD JAVASCRIPT **/


const body = document.querySelector("body"),
      sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle"),
      modeSwitch = document.querySelector(".toggle-switch"),
      modeText = document.querySelector(".mode-text"),
      section = document.querySelector(".content"),
      showBtn = document.querySelector(".show-modal"),
      signupBtn = document.querySelector(".signup-btn"),
      salesOrder = document.querySelector(".sloder"),
      customer = document.querySelector(".custo"),
      items = document.querySelector(".itms"),
      supplier = document.querySelector(".sup"),
      user = document.querySelector(".user"),
      closeBtn = document.querySelector(".close-btn");
      
      


         
       //** ARROW OPEN CLOSED FUNCTION **/
      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("open");
      });



      //** DARK MODE FUNCTION **/
      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if (body.classList.contains("dark")){
            modeText.innerHTML = "Light Mode"
        }else{
            modeText.innerHTML = "Dark Mode"
        }
      });

           //** Logout popup **/

           showBtn.addEventListener("click",() => body.classList.add("active"));
           closeBtn.addEventListener("click",() => body.classList.remove("active"));
     
                    //** signuo popup **/
          signupBtn.addEventListener("click", () => {
           window.location.replace("login.html")
          })
           
          //** SALES ORDER **/
        
          salesOrder.addEventListener("click", () => {
           window.location.assign("Orderlist.html")
     
           
            })
     
            //** CUSTOMERS **/
            customer.addEventListener("click", () => {
             window.location.assign("customers.html")
       
             
              })

        //** items **/
       items.addEventListener("click", () => {
        window.location.assign("items.html")
  
        
         })

                  //** Supplier **/
         supplier.addEventListener("click", () => {
          window.location.assign("supplier.html")
    
          
           })

           
                 //** UserManagement **/
                 user.addEventListener("click", () => {
                    window.location.assign("usermanagement.html")
              
                    
                     });
          