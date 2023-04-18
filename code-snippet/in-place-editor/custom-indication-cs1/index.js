ej.base.enableRipple(true);

//Initialize In-place Editor control
var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    },
    actionSuccess: function(e) {
        var pk = e.data['PrimaryKey'];
        if (ej.base.isNullOrUndefined(pk) || pk === '') {
            document.querySelector('.e-editable-value').classList.add('e-send-error');
        }
    }
});

//Render initialized In-place Editor control
editObj.appendTo('#element');

