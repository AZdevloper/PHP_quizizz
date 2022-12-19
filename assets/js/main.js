
function update( isbn ,title ,author ,publish_year ,langage , id) {

  document.getElementById("book_isbn").value = isbn;
  document.getElementById("book_author").value = author;
  document.getElementById("book_title").value = title;
  document.getElementById("book_lang").value = langage;
  document.getElementById("book_date").value = publish_year;
  document.getElementById("book_id").value = id;



}
// resit form

function resit() {
  document.getElementById("form-task").reset();
}

// res

function showBtn(btn){
 
  if(btn == "modifier"){
 
    document.getElementById("task-save-btn").style.display = "none";
    document.getElementById("task-update-btn").style.display = "block";

  }


  else if(btn == "ajouter"){
   document.getElementById("task-save-btn").style.display = "block";
    document.getElementById("task-update-btn").style.display = "none";
    
  }


}
let sign_up_sub = document.getElementById("sign_up_submit");
sign_up_sub.disabled = true;
sign_up_frstname.addEventListener('input',function(e){
 
  var pattern =  /^[^0-9]{3,15}$/;
  var currentValue = e.target.value;
  let valid = pattern.test(currentValue);



    if (valid) {
      e.target.classList.remove('border-danger') ;
      label_error.classList.add('d-none');  

      e.target.classList.add('border-success','border-2');    
    }else{
     
      e.target.classList.add('border-danger','border-2'); 
      label_error.classList.remove('d-none') ;

      label_error.classList.add('d-block');  
    }
})

sign_up_lastname.addEventListener('input',function(e){
 
  var pattern = /^[^0-9]{3,15}$/;
  var currentValue = e.target.value;
  let valid = pattern.test(currentValue);



    if (valid) {
      e.target.classList.remove('border-danger') ;
      label_error.classList.add('d-none');  

      e.target.classList.add('border-success','border-2');    
    }else{
     
      e.target.classList.add('border-danger','border-2'); 
      label_error.classList.remove('d-none') ;

      label_error.classList.add('d-block');  
    }
})


useremail.addEventListener('input',function(e){
 
  var pattern = /^[a-z.A-Z]+@[a-zA-Z]+.com$/;
  var currentValue = e.target.value;
  let valid = pattern.test(currentValue);


 if (valid) {

      e.target.classList.remove('border-danger') ;
      label_error_email.classList.add('d-none');  
      e.target.classList.add('border-success','border-2');

    }else{
     
      e.target.classList.add('border-danger','border-2'); 
      label_error_email.classList.remove('d-none') ;

      label_error_email.classList.add('d-block');  
    }
})

sign_up_password.addEventListener('input',function(e){
 
  var pattern1 = /[a-z]/;
  var pattern2 = /[A-Z]/;
  var pattern3 = /[0-9]/;
  var currentValue = e.target.value;
  let valid1 = pattern1.test(currentValue);
  let valid2 = pattern2.test(currentValue);
  let valid3 = pattern3.test(currentValue);



    if (valid1 &&   valid2 && valid3 && currentValue.length >= 8) {

      e.target.classList.remove('border-danger') ;
      label_error_password.textContent = "";
      e.target.classList.add('border-success','border-2');

    }else{
     
      e.target.classList.add('border-danger','border-2'); 
      label_error_password.textContent = "mote de pass peut contiens : majuscul ,miniscule ,number,plus de 8 caracter";

    }
}) 

confirme_password.addEventListener('input',function(e){

 if (sign_up_password.value == confirme_password.value) {
      e.target.classList.remove('border-danger') ;
      e.target.classList.add('border-success','border-2');
      sign_up_sub.disabled = false;
      label_error_password.textContent = "";

    }else {
     
      e.target.classList.add('border-danger','border-2'); 
      sign_up_sub.disabled = true;  
      label_error_password.textContent = "mot de passe pas identique";
      
    }

})





