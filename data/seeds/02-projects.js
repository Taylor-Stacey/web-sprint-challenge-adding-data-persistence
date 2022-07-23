const projects = [
    {project_id: 1, project_name: 'big code!', project_description: 'some kinda text', project_completed: 0}
]

exports.seed = async function(knex){
    await knex ('projects').insert(projects)
}