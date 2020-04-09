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
      //转换
      babel: {
        options: {
            sourceMap: false,
            presets: ['env']
        },
        dist: {
            files: [{
                expand:true,
                cwd:'font/',//origin_js目录下
                src:['**/*.js'], //所有js文件
                dest:'babel/'  //输出到此目录下
            },
            {
              expand:true,
              cwd:'Menubar/', //origin_js目录下
              src:['**/*.js'], //所有js文件
              dest:'babel/'  //输出到此目录下
          },
          {
            expand:true,
            cwd:'edit/', //origin_js目录下
            src:['**/*.js'], //所有js文件
            dest:'babel/'  //输出到此目录下
        }
          ]
        }
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
          'dist/edit/edit.css':'./edit/edit.css'
    },
    uglify: {
      release:{
        files: {
          'dist/Menubar/menu-data.js': './Menubar/menu-data.js',  
          'dist/font/list.js': './babel/list.js',
          'dist/font/font.js': './babel/font.js',
          'dist/Menubar/menubar.js': './babel/menubar.js',  
          'dist/edit/edit.js':'./babel/edit.js'
        }
      }         
    }
    });
  
      grunt.loadNpmTasks('grunt-contrib-csslint');
      grunt.loadNpmTasks('grunt-htmlhint');
      grunt.loadNpmTasks('grunt-eslint');
      grunt.loadNpmTasks('grunt-babel');
      grunt.loadNpmTasks('grunt-contrib-htmlmin');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
      grunt.registerTask('min', ['babel','cssmin','htmlmin','uglify']);
      grunt.registerTask('default', ['babel','htmlhint', 'csslint', 'eslint','uglify','cssmin','htmlmin']);
  };