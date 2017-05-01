
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('BusType').del()
    .then(function () {
      // Inserts seed entries
      return knex('BusType').insert([
        {id: 1, BusName: 'Kantipur', id: 1},
        {id: 2, BusName: 'Mahanagar', id: 2}

      ]);
    });
};
