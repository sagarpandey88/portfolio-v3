var ghpages = require('gh-pages');
ghpages.publish('out', {add: true, dotfiles:true}, function(){console.log("This is done");});