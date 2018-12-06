/**
 * Created by harryward on 9/14/17.
 */

JsonRoutes.add("get", "/api/columns", function (req, res, next) {
    //
    //var pipeline = [
    //    { $unwind: '$elements' },
    //    { $sort: {
    //        'elements.column':1,
    //        'elements.row':-1
    //    }}
    //];
    //var result = MomentColumns.aggregate(pipeline);

    JsonRoutes.sendResult(res, {
        data: MomentTable.find({},{sort:{row:-1}}).fetch()
    });
});