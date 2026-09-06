/*   mobile navigation  */

/*find an HTML element using its id*/

const menuToggle=document.getElementById("menutoggle");

/*finding navigation links*/

const navLinks=document.getElementById("navlinks");

/* checking if they both exists
 */
if(menuToggle && navLinks){

    /* adding event "click" on the button */
    menuToggle.addEventListener("click",function(){
        navLinks.classList.toggle("show");

        /* check whether menu is open*/
        const menuIsOpen=navLinks.classList.contains("show");
        menuToggle.setAttribute("aria-expanded",menuIsOpen);
    });
}

/*  dark /light mode*/
const themeToggle=document.getElementById("themeToggle");
if(themeToggle){

    themeToggle.addEventListener("click", function(){

    /*add or remove dark-mode */
        document.body.classList.toggle("dark-mode");

        /* checks whether it is active*/
        const darkModeActive=document.body.classList.contains("dark-mode");
        
        /*Change the button icon*/
if(darkModeActive){
    themeToggle.textContent="☀️";
    themeToggle.setAttribute(
        "aria-label",
    "Switch to light mode");
}
else{
    themeToggle.textContent="🌙";
    themeToggle.setAttribute(
        "aria-label",
        "Switch to dark mode"
    );

}
    });

   
}
/* menu filter  */

/*select all filter buttons*/
const filterButtons=document.querySelectorAll(".menu-button");


/*select all menu cards*/
const menuCards=document.querySelectorAll(".menu-card");

/*  loop through every filter button*/
filterButtons.forEach(
    function(button){


        /* wait for the user to click*/

        button.addEventListener(
            "click",function(){

                /* getting the value of data-filter*/
                const selectedCategory= button.getAttribute("data-filter");

                /* remove active styling from every button.*/
                filterButtons.forEach(
                    function(item){
                        item.classList.remove(
                            "active-btn");
                    }
                );
                /* add style to the button click*/
                button.classList.add("active-btn");
                
                /* check every menu card.*/

                menuCards.forEach(
                    function(card){

                        /* getting the card category*/
                        const cardCategory =card.getAttribute("data-category");

                        /* if all is selecetd . shows every card .
                        otherwise only show cards belonging to the selected  category.*/

                        if( selectedCategory ==="all" ||
                            selectedCategory === cardCategory )
                        {
card.style.display ="block";                       
 }        
else{
    card.style.display="none";
}   
       }
                );

            }
        );
    }
);



/* form validation */

const reservationForm=document.getElementById("reservationForm");

if(reservationForm){

    const requiredFields = [
        {
            input: document.getElementById("name"),
            error: document.getElementById("nameError"),
            message: "Please enter your name."
        },
        {
            input: document.getElementById("email"),
            error: document.getElementById("emailError"),
            message: "Please enter a valid email address."
        },
        {
            input: document.getElementById("phone"),
            error: document.getElementById("phoneError"),
            message: "Please enter your phone number."
        }
    ];

    requiredFields.forEach(function (field) {
        field.input.addEventListener("invalid", function () {
            field.error.textContent = field.message;
        });

        field.input.addEventListener("input", function () {
            field.error.textContent = "";
        });
    });

    reservationForm.addEventListener("submit", function(event){

        /* stops browser form refreshing*/
        event.preventDefault();

        /* get the values entered by customer.*/

        const name =document.getElementById("name").value.trim();
        /* trim removes the empty spaces*/

        const email = document.getElementById("email").value.trim();
        const phone=document.getElementById("phone").value.trim();
        const date =document.getElementById("date").value;
        const time =document.getElementById( "time").value;
     const guests =document.getElementById ("guest").value;
     
     /* error messages*/
const nameError=document.getElementById("nameError");
const emailError=document.getElementById("emailError");
const phoneError=document.getElementById("phoneError");
const dateError=document.getElementById("dateError");
const timeError=document.getElementById("timeError");
const guestError=document.getElementById("guestError");
const successMessage=document.getElementById("formSuccess");

/* clear old messages.*/
nameError.textContent="";
emailError.textContent="";
phoneError.textContent="";
dateError.textContent="";
timeError.textContent="";
guestError.textContent="";
successMessage.textContent="";


let valid=true;/* assume*/
if(name===""){
    nameError.textContent="Please enter your name .";
    valid =false;
}
else if ( name.length <2){
    nameError.textContent=
    "Name must contain at least 2 characters";
    valid =false;
}

/* email validation */
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(email===""){
emailError.textContent="Please enter your email."
valid =false;

    }
    else if(
        !emailPattern.test(email)
    ){
        emailError.textContent="please enter a valid email address.";
        valid =false;
    }


    /*phone validation*/
    const phonePattern=/^[0-9+\s()-]{8,15}$/;
    if ( phone===""){
        phoneError.textContent="Please enter your phone number.";
        valid =false;
    }
    else if (
        !phonePattern.test(phone))
    {
        phoneError.textContent="Please enter a valid phone number."
        valid=false;
    }

    /* date reservation*/
    if(date===""){
        valid=false;
        dateError.textContent="Please select a reservation date.";
    }

    /* time reservation */

if (time === "") {

                valid = false;
                timeError.textContent="Please select a reservation time.";


}
/*guest validation */

if(guests===""){
    valid=false;
    guestError.textContent="Please select the number of guests.";
}

/* success */
if(valid){

    successMessage.textContent="Thank you! Your reservation request has been received .";

    /* clear form after a successful submission */
    reservationForm.reset();
}

}
);
}

/* FAQ */
const faqQuestion=document.querySelectorAll(".faq-question");

faqQuestion.forEach(
    function(question){
        question.addEventListener(
            "click",
            function(){


                /* find the parent faq */
                 const faqItem = question.parentElement;

                 /* checking whether faq is already open */

                 const isOpen=faqItem.classList.contains("open");
                 /* close every faq first.*/

                 document.querySelectorAll(".faq-item").forEach(
                    function(item){
                        item.classList.remove("open");

                        /*update accessibility */
                        const button =item.querySelector(".faq-question");
                        button.setAttribute("aria-expanded","false");
                    }
                 );
/*if the selected faq is closed , open it */
if(!isOpen){
    faqItem.classList.add("open");

    question.setAttribute(
        "aria-expanded","true");
    
}
            }

        );


    }
)

