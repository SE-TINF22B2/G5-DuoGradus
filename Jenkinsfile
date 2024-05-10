pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'cd backend && npm install && npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'cd backend && npm run check && npm run test:cov && npm run test:e2e'
      }
    }
  }

  post {
    success {
      echo 'Pipeline successful!'
    }
  }
}
