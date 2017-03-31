// Exporting a function called "initialize" which takes a router object as an input argument.
module.exports.initialize = function (router) {

    router.route('/.well-known/identity/:id/profile')
        .get(function (req, res) {
            // TODO.
            let jsonResponse = {
                id: req.params.id,
                description: "TODO: profile controller"
            };

            res.json(jsonResponse);
        });
};
