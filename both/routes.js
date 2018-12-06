FlowRouter.route('/', {
    action: function(params) {
        Session.set('render',true);
    }
});

//FlowRouter.route('/admin', {
//    subscriptions: function(params) {
//        this.register('momentManager', Meteor.subscribe('groups'));
//    },
//    action: function(params) {
//        BlazeLayout.render('momentManager');
//    }
//});