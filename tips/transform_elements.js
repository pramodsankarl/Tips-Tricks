 //create a jquery function for ease of operation.
$.fn.transform = function(replacer){
    replacer = replacer || {};
    this.find('*').each(function(){
        var newNode = replacer[this.nodeName];
        if(this.nodeType == 1 && newNode){//check for element node and if it is one in the replacement object
            $(this).contents().unwrap().wrapAll(newNode); // take the contents out of the element unwrap it and then wrap all of the contents by creating a new object based on the replacement object value.
        }
    });
    return this; //return for chaining
}

$(document).ready(function() {
    $("button").click(function() {

        //create an object with key value pair of replacement required
        var repl = {
            'B' :'<strong/>',
            'I' : '<em/>',
            'FONT': '<span/>'
        }
        $("div").transform(repl);
    });    
});