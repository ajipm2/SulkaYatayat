
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Fare').del()
    .then(function () {
      // Inserts seed entries
      return knex('Fare').insert([

      ]);
    });
};
