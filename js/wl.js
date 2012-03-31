(function() {
    var filesByPath = {};
    var wl = window.WL = {};
    var counter = 0;
    wl.init = function() { };
    wl.login = function(data, cb)
    {
        cb && cb({status: 'connected'});
    };
    wl.api = function(path, type, cb)
    {
        if (!filesByPath[path])
        {
            filesByPath[path] = [];
            
            for (var i = 0; i < 10; i++)
            {
                filesByPath[path].push({
                    name: 'name' + counter,
                    type: 'folder',
                    source: 'source' + counter,
                    id: counter + 1,
                    from: {name: 'Luke Millar'},
                    size: 120,
                    updated_time: '2012-12-03T18:31:01+0000'
                });
                counter++;
            }
        }
        
        setTimeout(function() {
            cb && cb({data: filesByPath[path]});
        }, 5000);
    };
    wl.logout = function()
    {
        
    };
    wl.getLoginStatus = function(callback)
    {
        callback({ status: 'connected'});
    };
})();