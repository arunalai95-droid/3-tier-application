pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Frontend Validation') {
            steps {
                sh '''
                    echo "Checking frontend..."
                    test -f frontend/index.html
                    echo "Frontend file exists"
                '''
            }
        }

        stage('Backend Install') {
            steps {
                sh '''
                    cd backend
                    npm install
                '''
            }
        }

        stage('Backend Test') {
            steps {
                sh '''
                    cd backend
                    node --check server.js
                    echo "Backend syntax check passed"
                '''
            }
        }

        stage('Deployment') {
            steps {
                sh '''
                    echo "Deployment stage"
                    echo "Application deployment will be performed here"
                '''
            }
        }

        stage('Verification') {
            steps {
                sh '''
                    echo "CI/CD pipeline verification completed"
                '''
            }
        }
    }

    post {
        success {
            echo '3-Tier Application CI/CD Pipeline completed successfully!'
        }

        failure {
            echo '3-Tier Application CI/CD Pipeline failed!'
        }
    }
}
