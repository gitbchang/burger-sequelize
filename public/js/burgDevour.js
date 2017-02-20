$(document).on("click", ".devourButton", function(e){
    console.log(e);
    var burgID = $(this).data("id");
    
    $.post("/api/"+burgID).then(function(result){
        console.log(result);
    });
});