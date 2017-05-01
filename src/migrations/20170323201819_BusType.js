
exports.up = function(knex, Promise) {
    return knex.schema.createTable('BusType', function (table) {
        table.increments();
        table.string('BusName');
        table.string('RouteID');
    })
};

exports.down = function(knex, Promise) {

};
