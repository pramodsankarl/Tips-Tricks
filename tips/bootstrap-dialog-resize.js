$('#modal').on('show', function () { //your modal selector of your modal
    $(this).find('.modal-body')
                 .css({width:'auto',
                       height:'auto', 
                       'max-height':'100%'
                     });
});