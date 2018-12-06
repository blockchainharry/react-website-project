Meteor.publish('table',function(){
    return MomentTable.find()
})

Meteor.publish('moments',function(){
    return Moments.find()
})