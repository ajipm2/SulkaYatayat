
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Discount').del()
    .then(function () {
      // Inserts seed entries
      return knex('Discount').insert([
        {id: 1, DiscountTypeId: 1},
        {id: 2, DiscountTypeId: 2}
      ]);
    });
};
