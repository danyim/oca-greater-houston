/*
 * Generated on 2015-08-19
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2015 Hariadi Hinta
 * Licensed under the MIT license.
 */

 'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      // bower: {
      //   files: ['bower.json'],
      //   tasks: ['wiredep']
      // },
      sass: {
        files: ['<%= config.src %>/assets/{,*/}*.scss'],
        tasks: ['sass']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= config.dist %>/assets/css/main.css': '<%= config.src %>/assets/{,*/}*.scss'
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/inherited.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs',
          plugins: ['assemble-contrib-permalinks','assemble-contrib-sitemap']
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }/*,
      fullWidthLayout: {
        options: {
          layout: '<%= config.src %>/templates/layouts/base.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/index.hbs']
        }
      }*/
    },

    // wiredep: {
    //   task: {
    //     src: [
    //       // Should this be the html in dist or the hbs?
    //       '<%= config.src %>/**/*.hbs'
    //     ],
    //     options: {
    //       // See wiredep's configuration documentation for the options
    //       // you may pass:
    //       // https://github.com/taptapship/wiredep#configuration
    //       ignorePath: '../../../bower_components/',
    //       fileTypes: {
    //         html: {
    //           replace: {
    //             js: '<script src="assets/js/{{filePath}}"></script>'
    //           }
    //         }
    //       }
    //     }
    //   }
    // },

    copy: {
      bootstrap: {
        expand: true,
        cwd: 'bower_components/bootstrap/dist/',
        src: '**',
        dest: '<%= config.dist %>/assets/'
      },
      css: {
        expand: true,
        cwd: 'src/assets/',
        src: '*.css',
        dest: '<%= config.dist %>/assets/css/'
      },
      images: {
        expand: true,
        cwd: 'src/assets',
        src: '**/*.{png,jpg,jpeg,gif,webp,svg}',
        dest: '<%= config.dist %>/assets/'
      },
      favicon: {
        expand: true,
        cwd: 'src/assets/',
        src: 'favicon.ico',
        dest: '<%= config.dist %>/'
      },
      fontawesome: {
        expand: true,
        cwd: 'bower_components/font-awesome/',
        src: ['fonts/**', 'css/**'],
        dest: '<%= config.dist %>/assets/'
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*', '.sass-cache']

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('serve', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'assemble',
    'sass'
    // 'wiredep'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
