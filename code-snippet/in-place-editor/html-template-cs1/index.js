ej.base.enableRipple(true);

//Initialize In-place Editor control
var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    template: '#date',
    value: '2018-05-23',
    actionBegin: function(e) {
        var value = editObj.element.querySelector('#date').value;
        editObj.value = value;
        e.value = value;
    }
});

//Render initialized In-place Editor control
editObj.appendTo('#element');

