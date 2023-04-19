ej.base.enableRipple(true);

//Initialize In-place Editor control
var editObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'Date',
    value: new Date('11/23/2018'),
    model: {
        placeholder: 'Select date',
        format: 'yyyy-MM-dd'
    }
});

//Render initialized In-place Editor control
editObj.appendTo('#element');

