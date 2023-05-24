ej.base.enableRipple(true);

var serviceUrl = 'https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData';

var frameWorkList = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];

//Initialize In-place Editor control
var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    type: 'MultiSelect',
    value: ['JavaScript', 'jQuery'],
    name: 'skill',
    url: serviceUrl,
    primaryKey: "FrameWork",
    adaptor: 'UrlAdaptor',
    model: {
        mode: 'Box',
        dataSource: frameWorkList,
        placeholder: 'Select skill'
    },
    actionSuccess: onActionSuccess,
    actionFailure: onActionFailure
});

//Render initialized In-place Editor control
editObj.appendTo('#element');

chipOnCreate(); // Initialize chips customization at initial load

function chipOnCreate() {
    editObj.element.querySelector('.e-editable-value').innerHTML = chipCreation(editObj.value);
}

function onActionSuccess(e) {
    e.value = chipCreation(e.value.split(','), true);
}

function onActionFailure(e) {
    e.value = chipCreation(e.value.split(','), false);
}

function chipCreation(data, isSuccess) {
    let value = '<div class="e-chip-list">';
    [].slice.call(data).forEach((val) => {
        value += '<div class="e-chip"> <span class="e-chip-text' + (!isSuccess ? 'e-highlight' : '') + '"> ' + val + '</span></div>';
    });
    value += '</div>';
    return value;
}

