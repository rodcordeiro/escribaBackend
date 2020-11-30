
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('chapters').insert([
        {title: 'ChapterTest',text:'ChapterTest'},
      ]);
    });
};
