module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		grunticon: {
			myIcons: {
				files: [{
					expand: true,
					cwd: 'images/icons/',
					src: ['*.svg'],
					dest: 'example/output/svg'
				}],
				options: {
					enhanceSVG: true,
					pngpath: '/example/png',
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-grunticon');
	grunt.registerTask('make-icons', ['grunticon:myIcons']);
}










