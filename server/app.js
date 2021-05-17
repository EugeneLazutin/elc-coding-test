/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data = require('./data');
const http = require('http');
const url = require('url');
const hostname = 'localhost';
const port = 3035;

/**
 * Start the Node Server Here...
 *
 * The http.createServer() method creates a new server that listens at the specified port.
 * The requestListener function (function (req, res)) is executed each time the server gets a request.
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3030');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    try {
        if (req.method === 'GET' && req.url.indexOf('/search') === 0) {
            /* skip filtering for the test
            const query = getSearchQuery(req.url);
            const result = filterData(data, query);
             */
            res.write(JSON.stringify(data));
        } else {
            res.statusCode = 404;
        }
    } catch (e) {
        res.statusCode = 500;
    } finally {
        res.end();
    }
}).listen(port);

function getSearchQuery(requestUrl) {
    const urlObject = url.parse(requestUrl, true);
    return urlObject.query.query;
}

function filterData(data, query) {
    const queryLowerCase = query.toLowerCase();
    return data.filter(({name, about, tags}) =>
        name.toLowerCase().indexOf(queryLowerCase) !== -1 ||
        about.toLowerCase().indexOf(queryLowerCase) !== -1 ||
        tags.some((tag) => tag.toLowerCase() === queryLowerCase)
    );
}

console.log(`[Server running on ${hostname}:${port}]`);
