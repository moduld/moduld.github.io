angular.module('app')
    .component('mainView', {
        templateUrl: "app/components/main_view.component.html",
        controller: ['dataStore', '$scope', mainViewCtrl]
    });

function mainViewCtrl(dataStore, $scope)
{
    var self = this;

    self.tabs = dataStore.allTabs;
    self.allCategories = dataStore.allCategory;
    self.allLabels = dataStore.allLabels;
    self.allColors = dataStore.allColors;

    self.fillFilterData = fillFilterData;
    self.fillCategoriesData = fillCategoriesData;
    self.isChecked = isChecked;

    $scope.$on('$destroy', function ()
    {
        dataStore.filterSettings = {
            background: [],
            labels: [],
            categories: {}
        }
    });

    function fillFilterData(flag, filtering, data)
    {
        filtering.color || filtering.label ? dataStore.filterSettings[flag].push(data) :
            dataStore.filterSettings[flag].splice(dataStore.filterSettings[flag].indexOf(data), 1)
    }

    function fillCategoriesData(key, filtering, subcat)
    {
        if (subcat){
            filtering ? dataStore.filterSettings.categories[key].push(subcat) :
                dataStore.filterSettings.categories[key].splice(dataStore.filterSettings.categories[key].indexOf(subcat), 1)
        } else {
            filtering ? dataStore.filterSettings.categories[key] = [] : delete dataStore.filterSettings.categories[key]
        }

    }

    function isChecked(catName, subcat, model)
    {
        if (dataStore.filterSettings.categories[catName] && dataStore.filterSettings.categories[catName].indexOf(subcat) >= 0){
            model ? model.state = true : '';
        } else {
            model ? model.state = false : '';
        }
    }

}