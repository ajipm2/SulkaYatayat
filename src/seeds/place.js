
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('place').del()
        .then(function () {
            // Inserts seed entries
            return knex('place').insert([

            ]);
        });
};
