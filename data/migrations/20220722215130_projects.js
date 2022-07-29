exports.up = function (knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments('project_id');
    tbl.varchar('project_name', 50).unique().notNullable()
    tbl.varchar('project_description', 200)
    tbl.boolean('project_completed').defaultsTo(false)
  })
  .createTable('resources', tbl => {
    tbl.increments('resource_id');
    tbl.varchar('resource_name', 100).unique().notNullable()
    tbl.varchar('resource_description', 250)
  })
};


exports.down =  async function(knex) {
  await knex.schema
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
