var empDetails = function (detail) {
    console.log(detail.doIt() + detail.fname);
};
empDetails({
    fname: 'Sayani',
    lname: 'Ghosh',
    level: 11,
    doIt: function () {
        console.log('Hi');
    }
});
