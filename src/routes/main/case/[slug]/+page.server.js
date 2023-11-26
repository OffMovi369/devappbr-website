import { error } from '@sveltejs/kit';
import projects from "$lib/server/projects.json"


export function load({ params }) {
    let projectId = params.slug 
    let project = undefined
    projects.forEach(el => {
        if(el.id == projectId){
            project = el
        }
    });
    if(project){
        return {
            project
        }
    }
    else{
        throw error(404, 'Not found');
    }
}