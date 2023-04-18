ej.base.enableRipple(true);

//Initialize In-place Editor control
var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    enableRtl: true
});

//Render initialized In-place Editor control
editObj.appendTo('#element');

