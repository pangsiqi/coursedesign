var app=angular.module('myapp', []);
        app.controller('mainctrl', function ($scope){
            $scope.show=false;
            //粉丝排序显示
                
                
            $scope.products = [
                        { id: 1, name: "小王", detail: "设计师，博客" },
                        { id: 2, name: "张琳", detail: "作家，杂志编辑" },
                        { id: 3, name: "李小明", detail: "艺术总监，电影剪辑" },
                        { id: 4, name: "赵大城", detail: "音乐家，运动员" }
                    ];
        });

 