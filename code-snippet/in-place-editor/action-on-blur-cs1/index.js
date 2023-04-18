ej.base.enableRipple(true);

var blurActionData = ['Submit', 'Cancel', 'Ignore'];

var dropDownObj = new ej.dropdowns.DropDownList({
    dataSource: blurActionData,
    width: 'auto',
    value: 'Submit',
    change: onChange,
    placeholder: 'Select blur action'
});
dropDownObj.appendTo('#dropDown')

//Initialize In-place Editor control
var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    }
});
//Render initialized In-place Editor control
editObj.appendTo('#element');

function onChange(e) {
    editObj.actionOnBlur = e.itemData.value;
    editObj.dataBind();
}

