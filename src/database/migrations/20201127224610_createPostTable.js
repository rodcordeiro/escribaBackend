
exports.up = function(knex) {
    return knex.schema.createTable('chapters',function(table){
        table.increments();
        table.string('Title').notNullable();
        table.string('text',999999999).notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('chapters')
};
