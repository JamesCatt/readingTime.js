/*
Name: readingTime.js
Dependencies: None
Author: James Catt
License: MIT
Last Updated: Jan 22, 2017
*/

;(function() {
    
    Object.prototype.readingTime = Object.prototype.readingTime || function(options) {
        
        if (this.tagName === undefined) { // check if we're being called on a DOM element
            
            console.log('readingTime.js Error: readingTime() must be invoked on a single DOM element.');
            return;
            
        } else {
            
            // set default options
            
            var wordsPerMin = typeof options !== 'undefined' && typeof options.wordsPerMin === 'number' ? options.wordsPerMin : 200,
                
                outputString = typeof options !== 'undefined' && typeof options.outputString === 'string' ? options.outputString : null,
                
                outputElement = typeof options !== 'undefined' && typeof options.outputElement !== 'undefined' && options.outputElement.tagName !== 'undefined' ? options.outputElement : null,
                
                returnSeconds = typeof options !== 'undefined' && typeof options.returnSeconds === 'boolean' ? options.returnSeconds : false;
            
            var wordCount = this.innerText.split(' ').length;
            
            if (wordCount > 1) {
                
                var estTime = wordCount / parseInt(wordsPerMin);
                
            } else {
                
                console.log('readingTime.js Error: No text found in this element!');
                
                return;
                
            }
            
            if (outputString) {
                
                if (outputString.match(/#[sS]#/)) {
                    
                    estTime *= 60;
                    
                    var seconds = Math.round(estTime) % 60;
                    
                    var minutes = Math.round((Math.round(estTime) - seconds) / 60);
                    
                    if (outputString.match(/#[s]#/) && seconds.toString().length == 1) {
                        seconds = '0' + seconds.toString();
                    }
                    
                } else {
                    
                    var minutes = Math.round(estTime) > 1 ? Math.round(estTime) : '<1';
                        
                }
                    
                var completedString = outputString.replace('#M#', minutes);
                
                completedString = completedString.replace(/#[Ss]#/, seconds);
                
                if (outputElement) {
                    
                    outputElement.innerHTML = completedString;
                    
                }
                
                return completedString;
                
            } else if (returnSeconds) {
                
                estTime *= 60;
                
            }
            
            estTime = Math.round(estTime) > 1 ? Math.round(estTime) : '<1';
            
            if (outputElement) {
                
                outputElement.innerHTML = estTime;
                
            }
            
            return estTime;
            
        }
        
    }
    
})();