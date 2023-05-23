ej.base.enableRipple(true);

var CheckBoxObj = new ej.buttons.CheckBox({ label: 'Enable Editor', checked: true, change: onChange });
CheckBoxObj.appendTo('#enable');

//Initialize In-place Editor control
var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    enableEditMode: true,
    actionOnBlur: 'Ignore',
    model: {
        placeholder: 'Enter some text'
    },
});

//Render initialized In-place Editor control
editObj.appendTo('#element');

function onChange(e) {
    editObj.enableEditMode = e.checked;
    editObj.dataBind();
}

