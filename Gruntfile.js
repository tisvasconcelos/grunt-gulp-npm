module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      options: {
        force: true
      },
      folder: ['assets/build/']
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: './assets/src/css',
          src: ['*.scss'],
          dest: './assets/build/css',
          ext: '.css'
        }]
      }
    },
    uglify: {
      build: {
        files: [{
           expand: true,
           cwd: './assets/src/js',
           src: '**/*.js',
           dest: './assets/build/js'
        }]
      }
    }
  });

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Task(s).
  grunt.registerTask('assets', ['sass:dist', 'uglify:build']);
  grunt.registerTask('default', ['clean', 'assets']);
};
