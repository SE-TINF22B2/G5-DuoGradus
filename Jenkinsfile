pipeline {
  agent {
    kubernetes {
      defaultContainer 'node'
    }
  }

  environment {
    DATABASE_URL = 'file:./database.dev.sqlite'
  }
  
  stages {
    stage('Build') {
      steps {
        container('node') {
          sh 'cd backend && npm install && npm run build'
          sh 'cd frontend && npm install && npm run build'
        }
      }
    }

    stage('Test') {
      steps {
        container('node') {
          sh 'cd backend && npm run test:cov && npm run test:e2e'
        }
      }
    }

    stage('Formatting') {
      steps {
        container('node') {
          sh 'cd backend && npm run check'
          sh 'cd docs && npm run check:format'
        }
      }
    }
  }

  post {
    success {
      echo 'Pipeline successful!!'
    }
  }
}
