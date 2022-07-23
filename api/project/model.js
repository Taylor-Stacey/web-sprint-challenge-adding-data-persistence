// build your `Project` model here
const db = require('../../data/dbConfig')

function getProject(){
    const projects = await db('projects')
        const project = {
            project_id: projects[0].project_id,
            project_name: projects[0].project_name,
            project_description: projects[0].project_description,
            project_completed: projects[0].toString()
        }

    return projects
}

module.exports = { getProject }