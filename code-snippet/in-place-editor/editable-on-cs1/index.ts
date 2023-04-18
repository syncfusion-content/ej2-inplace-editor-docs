

import { InPlaceEditor, EditableType } from '@syncfusion/ej2-inplace-editor';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

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


