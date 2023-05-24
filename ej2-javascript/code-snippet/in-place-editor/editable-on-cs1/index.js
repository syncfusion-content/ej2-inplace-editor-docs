ej.base.enableRipple(true);

var editableOnData = ['Click', 'DblClick', 'EditIconClick'];

var dropDownObj = new ej.dropdowns.DropDownList({
    dataSource: editableOnData,
    width: 'auto',
    change: onChange,
    value: 'Click',
    placeholder: 'Select edit type'
});
dropDownObj.appendTo('#dropDown');

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
    editObj.editableOn = e.itemData.value;
    editObj.dataBind();
}

