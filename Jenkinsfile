pipeline {
  agent any

  environment {
    DATABASE_URL = 'file:./database.dev.sqlite'
  }
  
  stages {
    stage('Build') {
      steps {
        sh 'cd backend && npm install && npm run build'
        sh 'cd frontend && npm install && npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'cd backend && npm run test:cov && npm run test:e2e'
        sh 'cd frontend && npm run test'
      }
    }

    stage('Formatting') {
      steps {
        sh 'cd backend && npm run check'
        sh 'cd docs && npm run check:format'
      }
    }
  }

  post {
    success {
      echo 'Pipeline successful!!'
    }
  }
}
