Meteor.methods({
    'loginCT': function (email, password) {
        // validate here
        var result = Clients.find({email: email, password: password}).fetch();
        switch (result.length) {
            case 0:
                console.log("false");
                return returnFaliure("User ID and password did not match");
                break;
            case 1:
                var sessionid = sessionSet("LOGIN", "id", result[0]._id);
                var sessionid = sessionSet(sessionid, "logintype", "CLIENT");
                var sessionid = sessionSet(sessionid, "name", result[0].name);
                var sessionid = sessionSet(sessionid, "email", result[0].email);
                var returnValue = {};
                returnValue['sessionid'] = sessionid;
                returnValue['menu'] = [{
                        name: "Open a new Ticket",
                        link: "/open"
                    },{
                        name: "Services",
                        link: "/services"
                    },{
                        name: "Change Password",
                        link: "/changepassword"
                    }];
                returnValue['homelink'] = "/home";
                returnValue['logintype'] = "CLIENT";
                returnValue['name'] = result[0].name;

                return returnSuccess("All set", returnValue);
                break;
            default:
                return returnFaliure("There is some error in login module. These developers are completely useless. Let me find out who wrote this code and teach her a lesson.");
        }
    }
});