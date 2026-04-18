
function beforesubmit(){
     let outputdata = document.querySelector(".outputdata")
      let inputdate = document.querySelector(".inputdate")
     
      console.log(inputdate.value);// string --> (en_IN)
     
     let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN")

     outputdata.value = formattedDate;
}