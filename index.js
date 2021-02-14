
function validateForm(){
    if( document.form.firstname.value == "" ) {
        document.getElementById("text_popup").innerHTML = "Please fill all fields!";
        text_popup.classList.add("textes");
        document.form.firstname.focus() ;
        setTimeout ( "setClear()", 4000 );
        return false;
     }
     if( document.form.lastname.value == "" ) {
      document.getElementById("text_popup").innerHTML = "Please fill all fields!";
      text_popup.classList.add("textes");
        document.form.lastname.focus() ;
        setTimeout ( "setClear()", 4000 );
        return false;
     }
     if( document.form.email.value == "" ) {
      document.getElementById("text_popup").innerHTML = "Please fill all fields!";
      text_popup.classList.add("textes");
        document.form.email.focus() ;
        setTimeout ( "setClear()", 4000 );
        return false;
     }
     if( document.form.company.value == "" ) {
      document.getElementById("text_popup").innerHTML = "Please fill all fields!";
      text_popup.classList.add("textes");
        document.form.company.focus() ;
        setTimeout ( "setClear()", 4000 );
        return false;
     }
     if( document.form.help.value == "" ) {
      document.getElementById("text_popup").innerHTML = "Please fill all fields!";
      text_popup.classList.add("textes");
        document.form.help.focus() ;
        setTimeout ( "setClear()", 4000 );
        return false;
     }
     if( document.form.med.value == "" ) {
      document.getElementById("text_popup").innerHTML = "Please fill all fields!";
      text_popup.classList.add("textes");
        document.form.med.focus() ;
        setTimeout ( "setClear()", 4000 );
        return false;
        
     }
     return( true );
    
}


function setClear ( )
{
   document.getElementById("text_popup").innerHTML = "";
   text_popup.classList.remove("textes");
}