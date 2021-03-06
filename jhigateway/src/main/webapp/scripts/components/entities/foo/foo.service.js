'use strict';

angular.module('jhigatewayApp')
    .factory('Foo', function ($resource, DateUtils) {
        return $resource('api/foos/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
