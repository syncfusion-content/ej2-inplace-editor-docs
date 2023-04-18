ej.base.enableRipple(true);

var modeData = ['Inline', 'Popup'];

var modeObj = new ej.dropdowns.DropDownList({
    dataSource: modeData,
    width: 'auto',
    value: 'Inline',
    change: onChange,
    placeholder: 'Select Mode'
});
modeObj.appendTo('#dropDown')

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
    /* Switch into another mode */
    editObj.mode = e.itemData.value;
    editObj.dataBind();
}

