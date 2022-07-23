exports.up = function (knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments('project_id');
    tbl.varchar('project_name', 50).unique().notNullable();
    tbl.varchar('project_description', 200)
    tbl.boolean('project_completed').notNullable();
  })
};


exports.down =  async function(knex) {
  await knex.schema
  .dropTableIfExists('projects')
};
