/**
 * Created by harryward on 9/14/17.
 */

JsonRoutes.add("get", "/api/moments", function (req, res, next) {
    JsonRoutes.sendResult(res, {
        data: {ready:true}
    });
});