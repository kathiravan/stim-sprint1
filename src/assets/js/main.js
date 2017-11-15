var j = $.noConflict();

j(document).ready(function () {
    
    

});



function childPopup() {
    jQuery(".partner-search-list-information").toggleClass("child");
}
function closeCurrentModal(id) {
    jQuery("#" + id).modal("hide");
}
function hideCurrentModal() {
    jQuery(".partner-search-list-information").removeClass("child");
}

function calendar(id) {
    j("#" + id).datepicker();
    j("#" + id).focus();
}
function calendarTime(id) {
    $input = j("#" + id);
    $input.datetimepicker({
        locale: 'en',
        format: 'MM/DD/YYYY hh:mm a',
        sideBySide: false,
        debug: true,
        useCurrent: true,
        widgetPositioning: {
            horizontal: 'right',
            vertical: 'bottom'
        }
    });
}
function activaTab(tab) {
    j('.nav-tabs a[href="#' + tab + '"]').tab('show');
};
function alertMessage() {
    jQuery(".flashMessage").fadeIn(700).delay(2000).fadeOut(700);
}
