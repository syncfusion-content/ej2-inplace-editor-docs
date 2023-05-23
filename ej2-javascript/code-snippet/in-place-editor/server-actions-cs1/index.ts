

import { InPlaceEditor, ActionEventArgs, MultiSelect } from '@syncfusion/ej2-inplace-editor';
InPlaceEditor.Inject(MultiSelect);

let serviceUrl: string = 'https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData';

let frameWorkList: string[] = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];

let editObj: InPlaceEditor = new InPlaceEditor({
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
editObj.appendTo('#element');

chipOnCreate(); // Initialize chips customization at initial load

function chipOnCreate(): void {
    editObj.element.querySelector('.e-editable-value').innerHTML = chipCreation(editObj.value);
}

function onActionSuccess(e: ActionEventArgs): void {
    e.value = chipCreation(e.value.split(','), true);
}

function onActionFailure(e: ActionEventArgs): void {
    e.value = chipCreation(e.value.split(','), false);
}

function chipCreation(data: string[], isSuccess: boolean): string {
    let value: string = '<div class="e-chip-list">';
    [].slice.call(data).forEach((val: string) => {
        value += '<div class="e-chip"> <span class="e-chip-text' + (!isSuccess ? 'e-highlight' : '') + '"> ' + val + '</span></div>';
    });
    value += '</div>';
    return value;
}


