

//** DASHBOARD JAVASCRIPT **/


const body = document.querySelector("body"),
      sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle"),
      modeSwitch = document.querySelector(".toggle-switch"),
      modeText = document.querySelector(".mode-text"),
      section = document.querySelector(".container-2"),
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
  
        
         });

         //** CUSTOMERS **/
         customer.addEventListener("click", () => {
            window.location.assign("customers.html")
      
            
             });

              //** items **/
         items.addEventListener("click", () => {
          window.location.assign("items.html")
    
          
           });

                  //** Supplier **/
         supplier.addEventListener("click", () => {
          window.location.assign("supplier.html")
    
          
           });





    
             window.onscroll = function() {myFunction()};

             var navbar = document.getElementById("navbar");
             var sticky = navbar.offsetTop;
             
             function myFunction() {
               if (window.pageYOffset >= sticky) {
                 navbar.classList.add("sticky")
               } else {
                 navbar.classList.remove("sticky");
               }
             }
 

   
    