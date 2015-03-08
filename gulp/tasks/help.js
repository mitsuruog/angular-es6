var gulp = require('gulp');
var colors = require('chalk');
var taskDiscript = require('../taskDescription.json');
var pad = '                                        ';

var taskGetter = {
  maxTaxkNameLength: function(){
    var ret = 0;
    taskGetter.mainTaskList().forEach(function(taskName){
      ret = (ret < taskName.length) ? taskName.length : ret;
    });
    return ret;
  },
  rightPad: function(taskName, len){
    return (taskName + pad).substring(0, len) ;
  },
  mainTaskList: function(){
    return Object.keys(gulp.tasks).sort();
  },
  descriptionList:function(){
    return Object.keys(gulp.tasks).sort();
  },
  dependencyTaskList: function(taskName){
    var subTasks=[];
    var depTasks = gulp.tasks[taskName].dep.sort();
    depTasks.forEach(function(depTask){
      subTasks.push(depTask);
    });
    return subTasks;
  },
  filterMainTask: function(task){
    return taskDiscript.main.indexOf(task) >= 0;
  },
  descriptionMsg:function(taskName){
    var padnum=taskGetter.maxTaxkNameLength();
    var msg = taskDiscript.description[taskName];
    var task = taskGetter.rightPad(taskName, padnum);
    if (msg){
      console.log(colors.blue.bold.underline(task),msg);
    }else{
      console.log(colors.red.bold.underline(task),
        colors.red.bold('No description given! add description to gulp/taskDescription.json'));
    }
  }
};


gulp.task('help', function(){
  var padnum=taskGetter.maxTaxkNameLength();
  console.log(colors.blue.bold(' === Main Task === '));
  taskGetter.mainTaskList()
            .filter(taskGetter.filterMainTask)
            .forEach(function(taskName){
    taskGetter.descriptionMsg(taskName);
  });
});


gulp.task('h:list', function(){
  var padnum=taskGetter.maxTaxkNameLength();
  console.log(colors.blue.bold(' === All Task === '));
  taskGetter.mainTaskList().forEach(function(taskName){
    taskGetter.descriptionMsg(taskName);
  });
});

// 依存関係を表示する、ツリー表示したい
gulp.task('h:dep', function(){
  var padnum=taskGetter.maxTaxkNameLength();
  console.log(colors.blue.bold(' === ependently Task === '));
  taskGetter.mainTaskList().forEach(function(taskName){
    console.log(colors.blue.bold(taskGetter.rightPad(taskName, padnum)),
                colors.gray(' => '),
                colors.gray('['+taskGetter.dependencyTaskList(taskName).join(', ')+']'));
  });
});

