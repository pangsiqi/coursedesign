//导航栏的手风琴效果
app.directive('showmore', function (){
            return {
                restrict: 'E',
                template:'<div class="{{show?\'more2\':\'more\'}}">' +
                '<a href="javascript:;" ng-click="show=!show">显示更多</a>' +
                '<span ng-transclude></span></div>',
                transclude: true
            };
        });