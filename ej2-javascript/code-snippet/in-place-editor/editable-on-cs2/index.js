ej.base.L10n.load({
    'fr-BE': {
        'inplace-editor': {
            'save': 'enregistrer',
            'cancel': 'Annuler',
            'editIcon': 'Cliquez pour éditer',
            'editAreaClick': 'Cliquez pour éditer',
            'editAreaDoubleClick': 'Double-cliquez pour éditer'
        }
    }
});
var editableOnData = ['Click', 'DblClick', 'EditIconClick'];

var dropDownObj = new ej.dropdowns.DropDownList({
    dataSource: editableOnData,
    width: 'auto',
    value: 'Click',
    change: onChange,
    placeholder: 'Select edit type'
});
dropDownObj.appendTo('#dropDown');

var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    locale: 'fr-BE',
    model: {
        placeholder: 'Enter some text'
    }
});
editObj.appendTo('#element');

function onChange(e) {
    var editType = e.itemData.value;
    editObj.editableOn = editType;
    editObj.dataBind();
}

