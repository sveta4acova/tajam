module.exports = function(grunt) {
	grunt.initConfig({
		pug: {
			debug: {
				options: {
					pretty: true
				},
				files: [{
					expand: true, //свойство, которое позволяет нам указать сразу все файлы, а не каждый по отдельности
					cwd: 'src/templates/pages', //папка в которой грунт возьмет файлы
					src: ['*.pug'], //возьми все файлы (*) с расширением pug
					dest: '', //скомпилируй их в корневую папку
					ext: '.html' //с расширением html
				}]
			}
		},

		concat_css: {
			options: {
				// Task-specific options go here.
			},
			concat_stylus: {
				files: {
					'tmp/stylus-blocks/settings.styl': ["src/stylus/settings/settings.styl", "src/stylus/settings/fonts.styl", "src/stylus/settings/common.styl"],
					'tmp/stylus-blocks/main.styl': ["src/stylus/main/*.styl"],
					'tmp/stylus-blocks/media.styl': ["src/stylus/media/*.styl"],
					'tmp/styles.styl': ['tmp/stylus-blocks/settings.styl', 'tmp/stylus-blocks/main.styl', 'tmp/stylus-blocks/media.styl']
				}
			}

		},


		stylus: {
			compile: {
				options: {
					compress: false
				},
				files: {
					'tmp/styles.css': ['tmp/styles.styl']
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 6 versions']
			},
			dist: {
				files: {
					'tmp/styles.css': 'tmp/styles.css'
				}
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'tmp',
					src: ['styles.css'],
					dest: 'assets/css',
					ext: '.min.css' //название файла будет подставлено из 3 пункта
				}]
			}
		},

		svgstore: {
			options: {
				prefix: 'shape-', // This will prefix each <g> ID
				svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
					viewBox: '0 0 100 100',
					xmlns: 'http://www.w3.org/2000/svg'
				}
			},
			target: {
				files: {
					'assets/images/sprites/social-icons-sprite.svg': ['assets/images/icons/*.svg']
				}
			}
		},

		concat: {
			options: {
				banner: "'use strict';\n",
				separator: ';'
			},
			dist: {
				src: ['src/js/globals.js', 'src/js/events.js', 'src/js/preloader.js', 'src/js/carousel.js', 'src/js/menu.js', 'src/js/form.js', 'src/js/popups.js', 'src/js/escape.js', 'src/js/scroll.js' ],
				dest: 'tmp/main.js'
			}
		},

		uglify: {
			my_target: {
				files: {
					'assets/js/main.min.js': ['tmp/main.js']
				}
			}
		},

		validation: { // Grunt w3c validation plugin
			options: {
				reset: grunt.option('reset') || false,
				stoponerror: false,
				generateCheckstyleReport: 'validation.xml',
				relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.',
					'Element title must not be empty.']
			},
			files: {
				src: ['index.html']
			}
		},

		watch: {
			stylus_watch: {
				files: ['src/stylus/**/*.styl'], //Изменяемые файлы
				tasks: ['build_styles'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			pug_watch: {
				files: ['src/templates/**/*.pug'], //Изменяемые файлы
				tasks: ['pug'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			js_watch: {
				files: ['src/js/*.js'], //Изменяемые файлы
				tasks: ['build_js'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		}
	});

  // Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-svgstore');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-w3c-html-validation');

  // Default task(s).
	grunt.registerTask('build_styles', ['concat_css', 'stylus', 'autoprefixer', 'cssmin']);
	grunt.registerTask('build_js', ['concat', 'uglify']);
	grunt.registerTask('svg_concat', ['svgstore']);
	grunt.registerTask('html_validation', ['validation']);
	grunt.registerTask('default', ['pug', 'build_styles', 'build_js', 'watch']);
};