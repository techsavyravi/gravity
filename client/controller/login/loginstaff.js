Template.loginstaff.helpers({
    isLoginError: function () {
        // because the Session variable will most probably be undefined the first time
        var a = SessionStore.get("loginerror");
        return a.status;
    },
    loginErrorMessage: function () {
        var a = SessionStore.get("loginerror");
        return a.message;
    }
});

Template.loginstaff.events({
    'submit #login': function (e, t) {
        e.preventDefault();
        // retrieve the input field values
        var email = t.find('#supportemail').value
        var password = t.find('#password').value;
        //validate here
        SessionStore.set("loginerror", undefined);
        SessionStore.set("loading", true);
        Meteor.call('loginStaff', email, password, function (error, result) {
            SessionStore.set("loading", false);
            if (error) {
                SessionStore.set("loginerror", {status: true, message: "Some serious error. Please contact admin"});
                console.log(error.reason);
            }
            else {
                if (result.status) {
                    SessionStore.set("loggedin", true);
                    SessionStore.set("logintype", result.data.logintype);
                    SessionStore.set("myid", result.data.sessionid);
                    SessionStore.set("menu", result.data.menu);
                    SessionStore.set("name", result.data.name);
                    SessionStore.set("role", result.data.role);
                    SessionStore.set("staffid", result.data.staffid);
                    SessionStore.set("homelink", result.data.homelink);
                    Router.go('adminhome');
                } else {
                    SessionStore.set("loginerror", {status: true, message: result.message});
                }
            }
        });
        return false;
    },
    'keydown #supportemail': function (e, t) {
        SessionStore.set("loginerror", undefined);
    },
    'keydown #password': function (e, t) {
        SessionStore.set("loginerror", undefined);
    }
});