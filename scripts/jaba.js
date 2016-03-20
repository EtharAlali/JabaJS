function StringDictionary(queryString) {
    var me = this;
    var keys = [];
    var values = [];

    this.item = function (key) {
        if (( key !== undefined ) && (key !== null))
            for (var i = 0; i < keys.length; i++)
                if (keys[i].toUpperCase() === key.toUpperCase())
                    return values[i];
        return null;
    }

    queryString = queryString.replace("?", "");

    var kvPairs = queryString.split("&");

    for (var i = 0; i < kvPairs.length; i++) {
        var pair = kvPairs[i].split("=");

        keys.push(pair[0]);
        values.push(pair[1]);
    }

    return me;
}


var Jaba = function () {
    /*
        1. Check the query string
        2. Determine if querystring has an A or B
        3. Show the A or B elements 
        4. Hide the opposite entries
    */
    var hashTable = new StringDictionary(window.location.search);
    var variant = hashTable.item("v");

    // Hide all attibutes with data-variant but not set 
    $("[data-variant]").hide();
    $('*[data-variant="' + variant + '"]').show();
}