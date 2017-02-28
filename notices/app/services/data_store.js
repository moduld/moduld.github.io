angular.module('app')
    .factory('dataStore', function ()
{

    this.tabs = localStorage.getItem('allTabs') ? JSON.parse(localStorage.getItem('allTabs')) : [
        {
            id: 1,
            title: 'Заметка 1. ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque expedita' +
            ' impedit tempora voluptas? Animi atque blanditiis cupiditate  dicta doloribus, ' +
            'dolorum earum ex facilis, illum mollitia officia quasi quia',
            categories: [
                {
                    category_name: 'Категория первая',
                    subcategory: ['Подкатегория один', 'Подкатегория два', 'Подкатегория три' ]
                },
                {
                    category_name: 'Категория вторая',
                    subcategory: ['Подкатегория один', 'Подкатегория два', 'Подкатегория три', 'Подкатегория четыре', 'Подкатегория пять']
                }
            ],
            labels: ['Ярлык первый'],
            background: 'default'
        },
        {
            id: 2,
            title: 'Заметка 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque expedita' +
            ' impedit tempora voluptas? Animi atque blanditiis cupiditate  dicta doloribus, ' +
            'dolorum earum ex facilis, illum mollitia officia quasi quia ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque expedita impedit ' +
            'tempora voluptas? Animi atque blanditiis cupiditate  dicta doloribus, dolorum earum ex facilis,' +
            ' illum mollitia officia quasi quia',
            categories: [
                {
                    category_name: 'Категория первая',
                    subcategory: ['Подкатегория четыре', 'Подкатегория пять']
                },
                {
                    category_name: 'Категория триетья',
                    subcategory: ['Подкатегория три']
                }
            ],
            labels: ['Ярлык первый', 'Ярлык третий', 'Ярлык пятый'],
            background: 'red'
        },
        {
            id: 3,
            title: 'Заметка 3. ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque expedita impedit ',
            categories: [
                {
                    category_name: 'Категория вторая',
                    subcategory: ['Подкатегория один', 'Подкатегория пять']
                }
            ],
            labels: [],
            background: 'brown'
        }
    ];

    this.colors = ['default', 'red', 'blue', 'green', 'yellow', 'violet', 'brown'];

    this.categories = localStorage.getItem('allCategories') ? JSON.parse(localStorage.getItem('allCategories')) : [
        {
            category_name: 'Категория первая',
            subcategory: ['Подкатегория один', 'Подкатегория два', 'Подкатегория три', 'Подкатегория четыре', 'Подкатегория пять']
        },
        {
            category_name: 'Категория вторая',
            subcategory: ['Подкатегория один', 'Подкатегория два', 'Подкатегория три', 'Подкатегория четыре', 'Подкатегория пять']
        },
        {
            category_name: 'Категория триетья',
            subcategory: ['Подкатегория один', 'Подкатегория два', 'Подкатегория три', 'Подкатегория четыре', 'Подкатегория пять']
        },
        {
            category_name: 'Категория четвертая',
            subcategory: ['Подкатегория один', 'Подкатегория два']
        }
    ];

    this.labels = localStorage.getItem('allLabels') ? JSON.parse(localStorage.getItem('allLabels')) : ['Ярлык первый', 'Ярлык второй', 'Ярлык третий', 'Ярлык четвертый', 'Ярлык пятый'];

    this.filtersObject = {
        background: [],
        labels: [],
        categories: {}
    };

    return {
        allTabs: this.tabs,
        allColors: this.colors,
        allCategory: this.categories,
        allLabels: this.labels,
        filterSettings: this.filtersObject,
        saveAllTabs: function (tabs)
        {
            localStorage.setItem('allTabs', JSON.stringify(tabs))
        },
        saveAllCategories: function (categories)
        {
            localStorage.setItem('allCategories', JSON.stringify(categories))
        },
        saveAllLabels: function (labels)
        {
            localStorage.setItem('allLabels', JSON.stringify(labels))
        }

    }
});
