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
        // $scope.man={content:"这世界上的很多事，有时候和我们眼睛看到的不一样。很多时候要我们慢慢地体会才会知道。我们不能急着看结果，就像种下一棵小花，你要耐心地等它破土发芽，慢慢长大，才能看到它开出美丽的花。尘世间的事也一样，要在时间里发酵，岁月里沉香，人生那些百思不得其解的事情，到后来时间会一一给你答案。岁月有时候特别用心良苦，它时常会给你很多磨难，其实它是想让你变得更好。 "};
        
 