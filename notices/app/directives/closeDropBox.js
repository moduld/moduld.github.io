angular.module('app')
    .directive('closeDrops', function ()
    {
        return {
            restrict: "A",
            link: function (scope, element)
            {
                element[0].addEventListener('click', closeDropBoxes);
                function closeDropBoxes (event)
                {
                    var toggleInputs = document.querySelectorAll('.toggle_input');
                    this.currentTarget = event.srcElement;
                    while (this.currentTarget.parentNode && !this.currentTarget.classList.contains('drop_container')){
                        if (this.currentTarget.parentNode === document.body) {
                            for(var i = toggleInputs.length; i--; toggleInputs[i].checked = false){
                            }
                        }
                        this.currentTarget = this.currentTarget.parentNode
                    }

                }
            }
        }
    });