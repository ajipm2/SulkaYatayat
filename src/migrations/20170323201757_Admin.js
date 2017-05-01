
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Admin', function (table) {
        table.increments();
        table.string('AdminName');
    })
};

exports.down = function(knex, Promise) {

};
