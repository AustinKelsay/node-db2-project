
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('make', 128)
          .notNullable();

        tbl.text('model', 128)
            .notNullable();

        tbl.integer('mileage')
            .notNullable();

        tbl.integer("vin")
            .notNullable();
    })
  };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
