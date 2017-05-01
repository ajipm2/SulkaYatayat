
exports.up = function(knex, Promise) {
    return knex.schema.createTable('place', function (table) {
        table.increments();

        table.string('From');
        table.string('To');

    })
};

exports.down = function(knex, Promise) {
  
};
