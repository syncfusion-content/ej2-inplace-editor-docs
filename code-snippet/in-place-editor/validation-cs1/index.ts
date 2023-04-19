

import { InPlaceEditor, ValidateEventArgs } from '@syncfusion/ej2-inplace-editor';

let textObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'Date',
    name: 'Today',
    emptyText: 'dd/mm/yyyy',
    model: {
        placeholder: 'Select date'
    },
    validationRules : {
        Today: { required: true }
    }
});
textObj.appendTo('#textBox');

let dateObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'Date',
    name: 'TodayCustom',
    emptyText: 'dd/mm/yyyy',
    model: {
        placeholder: 'Select date'
    },
    validationRules : {
        TodayCustom: { required: true }
    },
    validating: function(e: ValidateEventArgs) {
        e.errorMessage = 'Field should not be empty';
    }
});
dateObj.appendTo('#date');


