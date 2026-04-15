pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/YOUR-USERNAME/YOUR-REPO.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-website .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop my-container || true
                docker rm my-container || true
                docker run -d -p 8085:80 --name my-container my-website
                '''
            }
        }
    }
}
