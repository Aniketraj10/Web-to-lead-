
let captchaChecked = false;

function beforesubmit(event){
     if(captchaChecked){
          let outputdata = document.querySelector(".outputdata")
      let inputdate = document.querySelector(".inputdate")
     
      //console.log(inputdate.value);// string --> (en_IN)
     
     let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN")

     outputdata.value = formattedDate;
     }else{
          alert("Please checked the reCAPTCHA box to submit the Lead")
          event.preventDefault();
     }
     
}

function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 


function capthchasuccess(){
     captchaChecked = true;
}