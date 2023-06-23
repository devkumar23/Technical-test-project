$(document).ready(function(){
    $(".readMore").click(function(){   
        $(this).parent().find(".hideText").css("display", "inline-block")
        $(this).css("display", "none")
        $(this).parent().find(".readLess").css("display", "inline-block")
    })



    $(".readLess").click(function(){   
        $(this).parent().find(".hideText").css("display", "none")
        $(this).css("display", "none")
        $(this).parent().find(".readMore").css("display", "inline-block")
    })
})


$(document).on("click",".transparentButton", function(){
    alert("This button allows you to view the details of the university.")
})

$(document).on("click",".solidButton", function(){
    alert("This button allows you to explore the available courses offered by the university.")
})