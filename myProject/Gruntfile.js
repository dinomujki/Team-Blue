/*

Default Gruntfile for AppGyver Steroids
http://www.appgyver.com
Licensed under the MIT license.

*/

module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-steroids");
  grunt.loadNpmTasks("firebase");
  grunt.registerTask("default", [
    "steroids-make-fresh"
  ]);
}
