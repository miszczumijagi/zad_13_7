var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

/*fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
}); */

fs.readdir('./node_modules', 'utf-8', function(err, data) {
    console.log('Zawartość folderu node_modules'.blue);
    console.log(data);
    fs.writeFile('./folderContent.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
    });
    fs.readFile('./folderContent.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
});



