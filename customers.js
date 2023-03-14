// validate form inputs before submitting data
function validateForm() {

    var customer = document.getElementById("customer").value;
    var fname = document.getElementById("fname").value;
    var company = document.getElementById("company").value;
    var country = document.getElementById("country").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    

    if (customer == "") {
        swal("Customer ID is required")
        return false;
    }

    if (fname == "") {
        swal("Full name is required")
        return false;
    }

    if (company == "") {
        swal("Company is required")
        return false;
    }

    if (country == "") {
        swal("Country is required")
        return false;
    } 

    if (address == "") {
        swal("Address is required")
        return false;
    }

    if (email == "") {
        swal("Email is required")
        return false;
    }

    else if (!email.includes("@")) {
        swal("Invalid email address");
        return false;
    }


    return true;
}
// function to show data
function showData() {
    var customersDetails;
    if(localStorage.getItem("customersDetails") == null) {
        customersDetails = [];
    }

    else {
        customersDetails = JSON.parse(localStorage.getItem("customersDetails"));
    }

    var html = "";

    customersDetails.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.customer + "</td>";
        html += "<td>" + element.fname + "</td>";
        html += "<td>" + element.company + "</td>";
        html += "<td>" + element.country + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html +=
        '<td><button onclick="deleteData(' +
        index + 
        ')" class="btn-btn del">Delete</button><button onclick="updateData(' +
        index +
        ')" class="btn-btn1 del">Update</button</td>';
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
        var customer = document.getElementById("customer").value;
        var fname = document.getElementById("fname").value;
        var company = document.getElementById("company").value;
        var country = document.getElementById("country").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;
    

        var customersDetails;
    if(localStorage.getItem("customersDetails") == null) {
        customersDetails = [];
    } else {
        customersDetails = JSON.parse(localStorage.getItem
        ("customersDetails"));
    }

    customersDetails.push({
        customer: customer,
        fname: fname,
        company: company,
        country: country,
        address: address,
        email: email,
    });

    localStorage.setItem("customersDetails", JSON.stringify
    (customersDetails));
    showData();
    document.getElementById("customer").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("company").value = "";
    document.getElementById("country").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    }
}

// fucntion to delete Data from local storage

function deleteData(index) {
    var customersDetails;
    if(localStorage.getItem("customersDetails") == null) {
        customersDetails = [];
    } else {
        customersDetails = JSON.parse(localStorage.getItem
        ("customersDetails"));
    }

    customersDetails.splice(index, 1);
    localStorage.setItem("customersDetails", JSON.stringify
    (customersDetails));
    showData();
}

// function to update/edit data in local storage
function updateData(index){
    // submit button will hide and Update button will show for updating Data in Local Storage
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var customersDetails;
    if (localStorage.getItem("customersDetails") == null) {
        customersDetails = [];
    } else {
        customersDetails = JSON.parse(localStorage.getItem("customersDetails"));
    }

    document.getElementById("customer").value = customersDetails[index].customer;
    document.getElementById("fname").value = customersDetails[index].fname;
    document.getElementById("company").value = customersDetails[index].company;
    document.getElementById("country").value = customersDetails[index].country;
    document.getElementById("address").value = customersDetails[index].address;
    document.getElementById("email").value = customersDetails[index].email;
    

    document.querySelector("#Update").onclick = function() {
        if(validateForm() == true) {
            customersDetails[index].customer = document.getElementById("customer").value;
            customersDetails[index].fname = document.getElementById("fname").value;
            customersDetails[index].company = document.getElementById("company").value;
            customersDetails[index].country = document.getElementById("country").value;
            customersDetails[index].address = document.getElementById("address").value;
            customersDetails[index].email = document.getElementById("email").value;
        

        localStorage.setItem("customersDetails", JSON.stringify(customersDetails));

        showData();

        document.getElementById("customer").value = "";
        document.getElementById("fname").value = "";
        document.getElementById("company").value = "";
        document.getElementById("country").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
     

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
      section = document.querySelector(".container"),
      showBtn = document.querySelector(".show-modal"),
      signupBtn = document.querySelector(".signup-btn"),
      salesOrder = document.querySelector(".sloder"),
      customer = document.querySelector(".custo"),
      items = document.querySelector(".itms"),
      supplier = document.querySelector(".sup"),
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


     signupBtn.addEventListener("click", () => {
      window.location.replace("login.html")
     });


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
    
          
           });