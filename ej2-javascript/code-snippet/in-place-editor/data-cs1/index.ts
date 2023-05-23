

import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';

let gameList: { [key: string]: Object }[] = [
    { Id: '1', Name: 'Maria Anders' },
    { Id: '2', Name: 'Ana Trujillo' },
    { Id: '3', Name: 'Antonio Moreno' },
    { Id: '4', Name: 'Thomas Hardy' },
    { Id: '5', Name: 'Chiristina Berglund' },
    { Id: '6', Name: 'Hanna Moos' }
];

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'DropDownList',
    value: 'Maria Anders',
    model: {
        dataSource: gameList,
        fields: { text: 'Name' },
        placeholder: 'Select a customer'
    }
});
editObj.appendTo('#element');


