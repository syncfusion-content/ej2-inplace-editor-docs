


var genderData = ['Male', 'Female'];
var editObj = new ej2_inplace_editor_1.InPlaceEditor({
    type: 'Date',
    mode: 'Inline',
    value: new Date('04/12/2018'),
    model: {
        showTodayButton: true,
        placeholder: 'Select date of birth'
    }
});
editObj.appendTo('#dateofbirth');
var editObj = new ej2_inplace_editor_1.InPlaceEditor({
    value: 'Andrew',
    mode: 'Inline',
    model: {
        placeholder: 'Enter your name'
    }
});
editObj.appendTo('#element');
var editObj = new ej2_inplace_editor_1.InPlaceEditor({
    type: 'DropDownList',
    value: 'Male',
    mode: 'Inline',
    model: {
        dataSource: genderData,
        placeholder: 'Select gender'
    }
});
editObj.appendTo('#gender');



