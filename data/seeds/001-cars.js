
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: "Toyota", model: "Corolla", mileage: 186000, vin: 8348534858},
        {make: "Honda", model: "Civic", mileage: 153000, vin: 8348534858}
      ]);
    });
};
