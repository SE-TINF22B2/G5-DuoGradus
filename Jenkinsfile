pipeline {
  agent any
  
  stages {
    stage('Build') {
      steps {
        sh 'cd backend && npm install && npm run build && cp .env.example .env && ls -la'
      }
    }

    stage('Test') {
      steps {
        sh 'cd backend && npm run check && npm run test:cov && npm run test:e2e'
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
