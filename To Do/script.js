$("#add-btn").on("click" , function () {

    let isvalid = true;

    let task = $("#todo-input").val();
    let taskRegx =/^[a-zA-Z0-9][a-zA-Z0-9-_ ]{2,99}$/
    if(!taskRegx.test(task))
    {
         $("#error").text('*Task invalid,failed to add task!');
         isvalid = false;
    }

    if(isvalid)
    {
        alert("Task Added !");

        let now = new Date();
        let time = now.toLocaleTimeString();

        $("#todo-list").prepend(" " +task + " <br><br>"  );
       $("#time").prepend(time  );

    }
});

 
