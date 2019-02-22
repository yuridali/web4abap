var names = {

    userName : "",

    askName: function () {
        this.userName = window.prompt("Please, enter UserName:");
        return this.userName;
    },

    getAlterName: function (name) {
        var altername = "";
        if (/\d/.exec(name)) {
            for (var index = 0; index < name.length; index++) {
                if (/[A-Z]/.exec(name.charAt(index))) {
                    altername += (name.charAt(index)).toLowerCase();
                } else {
                    altername += (name.charAt(index)).toUpperCase();
                }
            }
        } else {
            for (var index = name.length; index >= 0; index--) {
                altername += name.charAt(index);
            }
        }
        return altername;
    },
}