/**
 * Created by harryward on 9/14/17.
 */

JsonRoutes.add("get", "/api/groups", function (req, res, next) {
    var id = req.params.id;

    JsonRoutes.sendResult(res, {
        data: MomentGroups.find().fetch()
    });
});