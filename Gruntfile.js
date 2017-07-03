module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  var userConfig = require( './dir.config.js' );
  
  var taskConfig = {

    pkg: grunt.file.readJSON('package.json'),
    watch: {
      public: {
        files: ['public/**'],
        tasks: ['copy:dev']
      }
    },
    
    copy: {
      dev: {
        files: [
          // includes files within path
          {
            src: [ '<%= vendor_files.fonts %>' ],
            dest: '<%= public_dir %>/fonts',
            expand: true,
            flatten: true
          },
          {
            src: [ '<%= vendor_files.js %>' ],
            dest: '<%= public_dir %>/js',
            expand: true,
            flatten: true
          },
          {
            src: [ '<%= vendor_files.css %>' ],
            dest: '<%= public_dir %>/css',
            expand: true,
            flatten: true
          }
        ]
      }
    }
  };

  grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

  grunt.registerTask('build', function(target) {
    grunt.task.run(['copy:dev','watch']);
  });


};