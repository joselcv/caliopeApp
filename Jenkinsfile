pipeline {
    agent any
    stages {
        stage('Instalar modulos') {
            steps {
                sh 'npm install'
            }
        }
				stage('Construir app') {
            steps {
                sh 'npm run build -f'
            }
        }
				stage('Desplegar en produccion') {
            steps {
                sh 'cp -r /var/lib/jenkins/workspace/CALIOPE-FRONTEND/dist /var/www/caliope.co'
            }
        }
    }
}