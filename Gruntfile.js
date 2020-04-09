module.exports = function (grunt) {
    grunt.initConfig({
    //静态代码检查
      eslint: {
        options: {
            configFile: '.eslintrc.json'
        },
          target: ['font/font.js']
      },
      csslint: {
        options: {
            csslintrc: '.csslintrc'        
        },
          src: 'font/font.css'
      },
      htmlhint: {
        options: {
            htmlhintrc: '.htmlhintrc'    
        },
        src: '*.html'          
      },
    //压缩
    htmlmin: {
      options: {
          collapseWhitespace: true,
          preserveLineBreaks: false                      
      },
      files: {
          src: './index.html',
          dest: 'dist/index.html'                            
      }    
    },
    cssmin: {
          'dist/font/list.css': './font/list.css',
          'dist/font/font.css': './font/font.css',
          'dist/Menubar/menubar.css': './Menubar/menubar.css',
    },
    uglify: {
      release:{
        files: {
          'dist/Menubar/menu-data.js': './Menubar/menu-data.js',  
          'dist/font/list.js': './font/list.js',
          'dist/font/font.js': './font/font.js',
          'dist/Menubar/menubar.js': './Menubar/menubar.js',  
        }
      }         
    }
    });
  
      grunt.loadNpmTasks('grunt-contrib-csslint');
      grunt.loadNpmTasks('grunt-htmlhint');
      grunt.loadNpmTasks('grunt-eslint');
      grunt.loadNpmTasks('grunt-contrib-htmlmin');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
      grunt.registerTask('min', ['cssmin','htmlmin','uglify']);
      grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint','uglify','cssmin','htmlmin']);
  };