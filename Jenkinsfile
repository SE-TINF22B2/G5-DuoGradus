pipeline {
  agent any
  
  stages {
    stage('Build') {
      steps {
        sh 'cd backend && npm install && npm run build && cp .env.example .env'
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
