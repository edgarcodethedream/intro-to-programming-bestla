
/*
let githubRequest = new XMLHttpRequest;
githubRequest.open('GET', 'https://api.github.com/users/edgarcodethedream/repos');
githubRequest.send();
githubRequest.addEventListener('load', function() {
    let repositories = JSON.parse(this.responseText);
    console.log(repositories);
    let projectSection = document.getElementById('projects');
    let projectList = projectSection.querySelector('ul');
    for (let i = 0; i < repositories.length; i++) {
        let project = document.createElement('li');
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
    }
});
*/

fetch('https://api.github.com/users/edgarcodethedream/repos')
.then(res => res.json())
.then(console.log())
.then(data => projectItems(data))

function projectItems(result) {
    //console.log(result);
    let projectSection = document.getElementById('projects');
    let projectList = projectSection.querySelector('ul');
    for (let i = 0; i < result.length; i++) {
        let projectElement = document.createElement('li');
        projectElement.innerText = result[i].name;
        projectList.appendChild(projectElement);
    }
}
