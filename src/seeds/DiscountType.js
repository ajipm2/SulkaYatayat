
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('DiscountType').del()
    .then(function () {
      // Inserts seed entries
      return knex('DiscountType').insert([
        {id: 1, DiscountType: 'Student Discount', DiscountPercentage:10},
          {id: 2, DiscountType: 'Senior Discount', DiscountPercentage:10}
      ]);
    });
};
