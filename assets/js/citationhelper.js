window.onload = function(){
    $("section .citation").each(function(){
        console.log("in citation each function");
        var newLink = document.createElement("a");

        citationNum = $(this).data("cite-num");
        
        //footCitation = $("footer").find("[data-footer-cite='"+citationNum+"']");
        footCitation = $("#footer-cite-"+citationNum)
        console.log(footCitation); 
        $(newLink).attr("href","#"+$(footCitation).attr("id"));
        $(this).wrap(newLink);
        $(this).attr("id", "sup-cite-"+citationNum);
        newLink = document.createElement("a");
       
        $(newLink).attr("href","#"+$(this).attr("id"));
        
        //add a superscript with the link to the citation back in the article        
        var newSup = document.createElement("sup");
        $(newSup).html("["+citationNum+"]");
        footCitation.prepend($(newLink).html(newSup));

    });

};
