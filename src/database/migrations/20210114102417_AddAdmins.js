
exports.up = function(knex) {
  return knex.schema.table('users',(table)=>{
      table.boolean('isAdmin')
  })
};

exports.down = function(knex) {
  return knex.schema.table('users',(table)=>{
      table.dropColumn('isAdmin')
  })
};
