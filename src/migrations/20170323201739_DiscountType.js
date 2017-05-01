
exports.up = function(knex, Promise) {
    return knex.schema.createTable('DiscountType', function (table) {
        table.increments();

        table.string('DiscountType');
        table.integer('DiscountPercentage');
    })
};

exports.down = function(knex, Promise) {

};
