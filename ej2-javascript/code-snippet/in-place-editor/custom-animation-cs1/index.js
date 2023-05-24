ej.base.enableRipple(true);

var openAnimateData = ['None', 'FadeIn', 'FadeZoomIn', 'ZoomIn'];

var openDropObj = new ej.dropdowns.DropDownList({
    value: 'ZoomIn',
    dataSource: openAnimateData,
    placeholder: 'Select a animate type',
    popupHeight: '150px',
    change: function(e) {
        editObj.popupSettings.model.animation.open.effect = e.value;
        editObj.dataBind();
    }
});
openDropObj.appendTo('#openDropDown');

//Initialize In-place Editor control
var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Popup',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    },
    popupSettings: {
        model: {
            animation: {
                open: { effect: 'ZoomIn', duration: 1000, delay: 0 }
            }
        }
    }
});
//Render initialized In-place Editor control
editObj.appendTo('#element');

