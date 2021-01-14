
exports.up = function(knex) {
  return knex.schema.table('chapters',(table)=>{
      table.string('author')
  })
};

exports.down = function(knex) {
    return knex.schema.table('chapters',(table)=>{
        table.dropColumn('author')
    })
};
