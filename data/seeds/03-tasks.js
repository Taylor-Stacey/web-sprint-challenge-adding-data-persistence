const tasks = [
  {task_id: 1, task_description: 'do the thing', task_notes: 'can i do it', task_completed: 0, project_id: 1}
]

exports.seed = async function(knex) {
  await knex ('tasks').insert(tasks)
};
