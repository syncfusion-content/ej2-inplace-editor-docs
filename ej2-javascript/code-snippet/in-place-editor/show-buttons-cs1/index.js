ej.base.enableRipple(true);

var CheckBoxObj = new ej.buttons.CheckBox({ label: 'Enable Buttons', checked: true, change: onChange });
CheckBoxObj.appendTo('#enableBtn');

//Initialize In-place Editor control
var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    },
    saveButton: {
        content: 'Ok',
        cssClass: 'e-outline'
    },
    cancelButton: {
        content: 'Cancel',
        cssClass: 'e-outline'
    }
});

//Render initialized In-place Editor control
editObj.appendTo('#element');

function onChange(e) {
    editObj.showButtons = e.checked;
    editObj.dataBind();
}

