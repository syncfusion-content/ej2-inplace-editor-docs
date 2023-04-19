

import { InPlaceEditor, ActionBlur } from '@syncfusion/ej2-inplace-editor';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

let blurActionData: string[] = ['Submit', 'Cancel', 'Ignore'];

let dropDownObj: DropDownList = new DropDownList({
    dataSource: blurActionData,
    width: 'auto',
    value: 'Submit',
    change: onChange,
    placeholder: 'Select blur action'
});
dropDownObj.appendTo('#dropDown')

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    }
});
editObj.appendTo('#element');

function onChange(e: ChangeEventArgs): void {
    let editType: ActionBlur = e.itemData.value as ActionBlur;
    editObj.actionOnBlur = editType;
    editObj.dataBind();
}


