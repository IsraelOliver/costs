import {useNavigate} from 'react-router-dom'

import styles from './css/Newproject.module.css'

import ProjectForm from '../projects/ProjectForm'

function Newproject() {

    const navigate = useNavigate()

    function createPost(project) {

        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localHost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/projects', { state: {message: 'Projeto criado com sucesso' }})
        })
        .catch(err => console.log(err))

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    )
}

export default Newproject