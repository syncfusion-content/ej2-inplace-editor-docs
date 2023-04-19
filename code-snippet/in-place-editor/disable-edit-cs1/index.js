ej.base.enableRipple(true);

var CheckBoxObj = new ej.buttons.CheckBox({ label: 'Disable', checked: false, change: onChange });
CheckBoxObj.appendTo('#enable');

//Initialize In-place Editor control
editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    }
});

//Render initialized In-place Editor control
editObj.appendTo('#element');

function onChange(e) {
    editObj.disabled = e.checked;
    editObj.dataBind();
}

