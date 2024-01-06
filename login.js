$("#formValidation").validate({
    rules: {
        name: {
            minlength: 2
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength: 10,
            maxlength:10 
        }
    },
   messages:{
    name:{
    // required:"please enter your name",
    // minlength:"Name at least 2 characters"
    },
    email:"please enter your email",
    // subject:"please enter your subject",
    // formMessage:"please enter your Message ",
    password:"please enter your password"

   },


    submitHandler: function (form) {
        form.submit();
    }
});


