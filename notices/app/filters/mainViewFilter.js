angular.module('app')
    .filter('mainView',['dataStore', function (dataStore)
    {
        return function (itemArray)
        {
                var output = itemArray.filter(function (item)
                {
                    return findColors(item) && findLabels(item) && findCategoryAndSubcategory(item)
                });


            function findColors(item)
            {
                return !dataStore.filterSettings.background.length ? true : dataStore.filterSettings.background.indexOf(item.background) >= 0 && true;
            }

            function findLabels(item)
            {

                if (dataStore.filterSettings.labels.length){
                    for (var i = 0; i < item.labels.length; i++){
                        if (dataStore.filterSettings.labels.indexOf(item.labels[i]) >= 0){return true}
                    }
                } else {
                    return true
                }
            }

            function findCategoryAndSubcategory(item)
            {
                if (Object.keys(dataStore.filterSettings.categories).length){
                    for(var i = 0; i < item.categories.length; i++){
                        if(dataStore.filterSettings.categories[item.categories[i].category_name]){
                            if(dataStore.filterSettings.categories[item.categories[i].category_name].length){
                                for(var j = 0; j < item.categories[i].subcategory.length; j++){
                                    if(dataStore.filterSettings.categories[item.categories[i].category_name].indexOf(item.categories[i].subcategory[j]) >= 0){
                                        return true
                                    }
                                }
                                return false
                            } else {
                                return true
                            }
                        }
                    }
                } else {
                    return true
                }
            }
            return output;
        }
    }]);