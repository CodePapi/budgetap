
$(function () {

    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }
    };
 $('#download').click(function () {
        var doc = new jsPDF();
        doc.fromHTML($('#file').html(), 15, 15, {
            'width': 170,'elementHandlers': specialElementHandlers
        });
        doc.save(count+'.pdf');
    });  
});