var Link = {
    "setColor" : function (color) {
        var link = document.querySelectorAll('a');
        var i = 0;
        while(i < link.length){
            link[i].style.color = color;
            i++;
        }
    }
};

var Body = {
    "setBackgroundColor" : function (color){
        var target = document.querySelector('body');
        target.style.backgroundColor = color;
    },
    "setColor" : function (color){
        var target = document.querySelector('body');
        target.style.color = color;
    }
};

function nightDayHandler(self){    
    var target = document.querySelector('body');

    if(self.value === 'Night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'Day'; 

        Link.setColor('yellow');
    } 
    else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'Night';

        Link.setColor('blue');
    }
}