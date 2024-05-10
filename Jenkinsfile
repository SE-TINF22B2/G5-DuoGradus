pipeline {
  agent any

  tools {
    nodejs 'node'
  }

  stages {
    stage('Build') {
      steps {
        sh 'cd backend && npm install && npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'cd backend && npm run check'
      }
    }
  }

  post {
    success {
      echo 'Pipeline successful!!'
    }
  }
}
