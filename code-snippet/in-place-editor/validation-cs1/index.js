ej.base.enableRipple(true);

//Initialize In-place Editor control
var textObj = new ej.inplaceeditor.InPlaceEditor({
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

//Render initialized In-place Editor control
textObj.appendTo('#textBox');

//Initialize In-place Editor control
var dateObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    type: 'Date',
    name: 'Today',
    emptyText: 'dd/mm/yyyy',
    model: {
        placeholder: 'Select date'
    },
    validationRules : {
        Today: { required: true }
    },
    validating: function(e) {
        e.errorMessage = 'Field should not be empty';
    }
});

//Render initialized In-place Editor control
dateObj.appendTo('#date');