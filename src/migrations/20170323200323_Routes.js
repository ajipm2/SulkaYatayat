
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Routes', function (table) {
        table.increments();

        table.string('RouteStart');
        table.string('RouteEnd');
        table.integer('NormalFare');
        table.integer('StudentCardFare');

    })
};

exports.down = function(knex, Promise) {

};
