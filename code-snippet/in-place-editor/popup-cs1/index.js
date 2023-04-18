ej.base.enableRipple(true);

var positionData = ['TopLeft', 'TopCenter', 'TopRight', 'BottomLeft', 'BottomCenter', 'BottomRight',
    'LeftTop', 'LeftCenter', 'LeftBottom', 'RightTop', 'RightCenter', 'RightBottom'];

var dropDownObj = new ej.dropdowns.DropDownList({
    value: 'BottomCenter',
    dataSource: positionData,
    placeholder: 'Select a position',
    popupHeight: '150px',
    change: function(e) {
        editObj.popupSettings.model.position = e.value;
        editObj.dataBind();
    }
});
dropDownObj.appendTo('#dropDown');

//Initialize In-place Editor control
var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Popup',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    },
    popupSettings: {
        title: 'Enter name',
        model: {
            position: 'BottomCenter'
        }
    }
});

//Render initialized In-place Editor control
editObj.appendTo('#element');

