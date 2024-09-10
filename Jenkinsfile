pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Descarga el código del repositorio
                git branch: 'main', url: 'https://github.com/arteagaluis/teliot-webapp-react.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Asegúrate de usar la versión correcta de Node.js
                    // Usa nvm si es necesario
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Compila el proyecto para producción
                    sh 'npm run build'
                }
            }
        }

        // stage('Test') {
        //     steps {
        //         script {
        //             // Ejecuta las pruebas del proyecto
        //             sh 'npm run test'
        //         }
        //     }
        // }

        stage('Deploy') {
            when {
                branch 'main'  // Solo despliega en la rama 'main'
            }
            steps {
                script {
                    // Despliega la aplicación
                    // Este es un ejemplo, deberás adaptarlo a tu entorno
                    sh 'npm run start'
                }
            }
        }
    }

    post {
        always {
            // Limpia después de la ejecución
            sh 'npm cache clean --force'
            cleanWs()
        }
        success {
            echo 'Pipeline completado con éxito'
        }
        failure {
            echo 'Pipeline fallido'
        }
    }
}
