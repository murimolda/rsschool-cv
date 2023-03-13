## Marina Palter

## HTML-coder, junior Front-end developer

### Contact information

**Phone:** [+995 557 654567](href="tel:+995557654567")   
**E-mail:** [murimolda@gmail.com](href="mailto:murimolda@gmail.com")  
**Telegram:** [murimolda](href="https://telegram.me/murimolda")  
**Skype:** [murimolda](href="skype:murimolda?userinfo)  
**Github:** <https://github.com/murimolda>  

---

### About Me

A couple of years ago, I decided to change job. I have chosen to work with websites because I like to see how my code turns the screen into something visual that everyone can understand. I often come across sites and applications that are inconvenient for the user, and it seems to me that I could learn to make sites better, more convenient.  
I am learning the basics of HTML/CSS-coding and Javascript. I want to work for an IT-company to be able to learn from the professionals who work in this field. I want to put this knowledge into practice and improve my programming skills.

---

### Hard Skills 

- HTML5, CSS3, SCSS
- JavaScript
- Webpack
- Sublime, Visual Studio Code
- Git, Github
- Figma, Zeplin

### Soft Skills

- Learnability  
- Purposefulness  
- Planning  
- Sociability  
- Impartiality, tolerance  
- Emotional intelligence, empathy  

### Languages  

- English - B2  

---

### Experience

- HTML/CSS/JS task (RS School) Portfolio: <https://murimolda.github.io/Portfolio/>
- JS task (RS School) Virtual-Keybord: <https://murimolda.github.io/Virtual-Keybord/>
- HTML/CSS/JS task (RS School) Memory Game: <https://murimolda.github.io/JS30_3-2_Memory-Game/>
- HTML/CSS/JS task (RS School) API Gallery: <https://murimolda.github.io/JS30-2-2_Images-Gallery/>
- Portfolio site for a photographer: <http://kulagin-art.com/>
- Design studio website FonDesign: <https://murimolda.github.io/FonDesign-site/>


---

### Education

- Belarusian State Technological University
  - International management

---

### Code example  

*Function add picture "img", which stands in a block with a class "ibg", as background:*    

```

    function ibg() {
        let ibg = document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage = 'url(' +bg[i].querySelector('img').getAttribute('src') + ')';
            }
        };
    }
    ibg();
```

*The function is triggered by clicking on the "arrow",* 
*the block with the id "arrow_top", the site page returns to the top, to the beginning:*  

```

        let goTopBtn = document.getElementById('arrow_top');

        function backToTop() {
          if (window.pageYOffset > 0) {
              window.scrollBy(0, -2000);
              setTimeout(backToTop, 0);
          }
        };

        goTopBtn.onclick = function() {
          backToTop();
        };
```
*Solution of the Codewars task.* 
*Get the square of each of the digits of a user-entered number* 
*as a string:*  

```

        let str = prompt('Enter number');
        function numSqrt(number){
        let arr = number.split('');
        let arr2 = [];
        for(i = 0; i < arr.length; i++){
            arr2.push(Math.pow(arr[i], 2));
       }
       alert(arr2.join(''));
     }
      numSqrt(str);```



