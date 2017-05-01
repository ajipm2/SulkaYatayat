
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Discount', function (table) {
        table.increments();
        table.string('DiscountTypeId');
        table.string('FareId');
    })
};

exports.down = function(knex, Promise) {

};
