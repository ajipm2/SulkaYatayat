exports.seeds = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('Admin').insert([
        {id: 1, Admin: 'Ajip', Password:'0390'},

      ]);
    });
};
