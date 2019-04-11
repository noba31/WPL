$(document).ready(function(){
  var errormsg = "";
  $("#phone").keyup(function() {
    $(this).val($(this).val().replace(/^(\d{3})(\d{3})(\d)+$/, "($1)$2-$3"));
  });
  $("form").submit(function(e){
    e.preventDefault();
    var email = $.trim($("#email").val());
    var fname = $.trim($("#fname").val());
    var lname = $.trim($("#lname").val());
    var phone = $.trim($("#phone").val());
    var code = $.trim($("#selectBox option").val());
    var passwd = $.trim($("#passwd").val());
    var cpasswd = $.trim($("#c-passwd").val());
    console.log(email,fname,lname,phone,code,passwd,cpasswd);
    var check= $('#check').prop('checked');
    

    if(fname.length < 1){
      errormsg += "Enter First Name <br/>";
      $("#fname").css({"border":"solid 3px red"});
      $("#fname").focus(function(){
        $(this).css({"border":"none"});
        $("#validate").empty();
      });
    }

    if(lname.length < 1){
      errormsg += "Enter First Name <br/>";
      $("#lname").css({"border":"solid 3px red"});
      $("#lname").focus(function(){
        $(this).css({"border":"none"});
        $("#validate").empty();
      });
    }

    if(email.length < 1){
      errormsg += "Enter Email Id <br/>";
      $("#email").css({"border":"solid 3px red"});
      $("#email").focus(function(){
        $(this).css({"border":"none"});
        $("#validate").empty();
      });
    }
    else{
      if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        errormsg += "Enter Valid Email id <br/>";
        $("#email").css({"border":"solid 3px red"});
        $("#email").focus(function(){
          $(this).css({"border":"none"});
          $("#validate").empty();
        });
      }
      else{
        /*$.ajax({
          type: "POST",
          url:"php/checkemail.php",
          dataType:"json",
          success:function(data){
            console.log( data[0].response );
            if(data == "exist"){
              errormsg += "Email alreadu exists. Try logging in. <br/>";
              $("#email").css({"border":"solid 3px red"});
              $("#email").focus(function(){
                $("#email").css({"border":"none"});
                $("#validate").empty();
              });
            }
          },
          error:function(data){
          }
        });*/
        console.log("ajax call comes here");
      }
    }
    

    if(code.length < 1){
      errormsg += "Select Country Code <br/>";
      $("#selectBox").css({"border":"solid 3px red"});
      $("#selectBox").focus(function(){
        $(this).css({"border":"none"});
        $("#validate").empty();
      });
    }    

    if(phone.length < 1){
      errormsg += "Enter Phone Number <br/>";
      $("#phone").css({"border":"solid 3px red"});
      $("#phone").focus(function(){
        $(this).css({"border":"none"});
        $("#validate").empty();
      });
    }
    if(phone.length != 10){
      errormsg += "Enter Valid Phone Number <br/>";
      $("#phone").css({"border":"solid 3px red"});
      $("#phone").focus(function(){
        $(this).css({"border":"none"});
        $("#validate").empty();
      });
    }


    if(passwd.length < 1){
      errormsg += "Enter Password <br/>";
      $("#passwd").css({"border":"solid 3px red"});
      $("#passwd").focus(function(){
        $(this).css({"border":"none"});
        $("#validate").empty();
      });
    }
    if(passwd.length < 6){
      $("#passwd").after('<span class="error">Password must be at least 6 characters long</span>');
      $("#passwd").css({"border":"solid 3px red"});
      $("#passwd").focus(function(){
        $(this).css({"border":"none"});
        $("span").remove();
      });
    }


    if(cpasswd.length < 1){
      errormsg += "Enter Confirm Password <br/>";
      $("#c-passwd").css({"border":"solid 3px red"});
      $("#c-passwd").focus(function(){
        $(this).css({"border":"none"});
        $("#validate").empty();
      });
    }

    if(cpasswd != passwd){
      errormsg += "Passwords do not Match <br/>";
      $("#c-passwd").css({"border":"solid 3px red"});
      $("#passwd").css({"border":"solid 3px red"});
      $("#c-passwd").focus(function(){
        $(this).css({"border":"none"});
        $("#validate").empty();
      });
      $("#passwd").focus(function(){
        $(this).css({"border":"none"});
        $("#validate").empty();
      });
    }

    if(check == false){
      errormsg += "Accept the Privacy Policy and Terms of Usage <br/>";
      $("#terms").css({"border":"solid 3px red"});
      $("#check").focus(function(){
        $("#terms").css({"border":"none"});
        $("#validate").empty();
      });
    }

    if(errormsg != ""){
      $("#validate").addClass("error");
      $("#validate").html(errormsg);
      errormsg = "";
      return false;
    }
    else{
      console.log("Create ajax to push to database");
    }
  
  })
});