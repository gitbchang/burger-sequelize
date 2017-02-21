$(document).one("click", ".devourButton", function(e){
    console.log(e);
    var burgID = $(this).data("id");
    // var ownerVal = $(".ownerName").val().trim();
    var ownerVal = getCorrectOwnerValue(burgID);
    
    $.post("/api/"+burgID).then(function(result){
        // console.log(result);
    });
    var ownerObject = {
        name: ownerVal
    };

    $.post("/api/owner/"+burgID, ownerObject).then(function(result){
        console.log(result);
        window.location= "/";
    });
});

function getCorrectOwnerValue(burgID){
    return $(".ownerName[data-ownerid='"+ burgID + "']").val().trim();
}

