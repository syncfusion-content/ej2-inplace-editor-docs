

import { L10n } from '@syncfusion/ej2-base';
import { InPlaceEditor, EditableType } from '@syncfusion/ej2-inplace-editor';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

L10n.load({
    'fr-BE': {
        'inplace-editor': {
            'save': 'enregistrer',
            'cancel': 'Annuler',
            'loadingText': 'Chargement...',
            'editIcon': 'Cliquez pour éditer',
            'editAreaClick': 'Cliquez pour éditer',
            'editAreaDoubleClick': 'Double-cliquez pour éditer'
        }
    }
});

let editableOnData: string[] = ['Click', 'DblClick', 'EditIconClick'];

let dropDownObj: DropDownList = new DropDownList({
    dataSource: editableOnData,
    width: 'auto',
    value: 'Click',
    change: onChange,
    placeholder: 'Select edit type'
});
dropDownObj.appendTo('#dropDown');

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    locale: 'fr-BE',
    model: {
        placeholder: 'Enter some text'
    }
});
editObj.appendTo('#element');

function onChange(e: ChangeEventArgs): void {
    let editType: EditableType = e.itemData.value as EditableType;
    editObj.editableOn = editType;
    editObj.dataBind();
}


