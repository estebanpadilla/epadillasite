//http://scrollmagic.io/docs/index.html
window.addEventListener('load', init, false);
window.addEventListener('loadstart', preInit, false);

function preInit() {
    console.log('loadstart()');

}

function init() {
    w3IncludeHTML();
    let width = window.innerWidth;
    let height = window.innerHeight;

    // loader.style.width = width + 'px';
    // loader.style.height = height + 'px';
    // loader.style.position = 'absolute';
    // loader.style.background = 'greenyellow';

    let downloadingImage = new Image();
    downloadingImage.src = "img/file.svg";
    downloadingImage.onload = function () {
        console.log('Loaded image');
        let loader = document.getElementById('loaderScene');
        // loader.style.opacity = 0;
        //continueAfter();
        //let loader_tween = TweenLite.to(loader, 1, { opacity: 0 });
    };


    function continueAfter() {

        let controller = new ScrollMagic.Controller();

        //Game Scene
        let trigger_GameScene = document.getElementById('trigger_GameScene');
        let animate_GameScene = document.getElementById('animate_GameScene');
        let tween_GameScene = TweenLite.to(animate_GameScene, 0.1, { color: "white" });

        var gameScene = new ScrollMagic.Scene({ triggerElement: trigger_GameScene });
        gameScene.setTween(tween_GameScene); // trigger a TweenMax.to tween
        gameScene.addIndicators({ name: "1 (duration: 1 second)" }); // add indicators (requires plugin)
        gameScene.addTo(controller);

        //AboutMe Scene    
        let trigger_AboutMeScene = document.getElementById('trigger_AboutMeScene');
        let animate_AboutMeScene = document.getElementById('animate_AboutMeScene');
        let tween_AboutMeScene = TweenLite.to(animate_AboutMeScene, 0.1, { color: "white" });

        var aboutMeScene = new ScrollMagic.Scene({ triggerElement: trigger_AboutMeScene });
        aboutMeScene.setTween(tween_AboutMeScene); // trigger a TweenMax.to tween
        aboutMeScene.addIndicators({ name: "1 (duration: 1 second)" }); // add indicators (requires plugin)
        aboutMeScene.addTo(controller);

        //Portfolio Scene    
        let trigger_PortfolioScene = document.getElementById('trigger_PortfolioScene');
        let animate_PortfolioScene = document.getElementById('animate_PortfolioScene');
        let tween_PortfolioScene = TweenLite.to(animate_PortfolioScene, 0.1, { color: "white" });

        let portfolioScene = new ScrollMagic.Scene({ triggerElement: trigger_PortfolioScene });
        portfolioScene.setTween(tween_PortfolioScene); // trigger a TweenMax.to tween
        portfolioScene.addIndicators({ name: "1 (duration: 1 second)" }); // add indicators (requires plugin)
        portfolioScene.addTo(controller);

        // Education Scene    
        let trigger_EducationScene = document.getElementById('trigger_EducationScene');
        let animate_EducationScene = document.getElementById('animate_EducationScene');
        let tween_EducationScene = TweenLite.to(animate_EducationScene, 0.1, { color: "white" });

        var educationScene = new ScrollMagic.Scene({ triggerElement: trigger_EducationScene });
        educationScene.setTween(tween_EducationScene); // trigger a TweenMax.to tween
        educationScene.addIndicators({ name: "1 (duration: 1 second)" }); // add indicators (requires plugin)
        educationScene.addTo(controller);

        // Experience Scene    
        let trigger_ExperienceScene = document.getElementById('trigger_ExperienceScene');
        let animate_ExperienceScene = document.getElementById('animate_ExperienceScene');
        let tween_ExperienceScene = TweenLite.to(animate_ExperienceScene, 0.1, { color: "white" });

        var experienceScene = new ScrollMagic.Scene({ triggerElement: trigger_ExperienceScene });
        experienceScene.setTween(tween_ExperienceScene); // trigger a TweenMax.to tween
        experienceScene.addIndicators({ name: "1 (duration: 1 second)" }); // add indicators (requires plugin)
        experienceScene.addTo(controller);
        /*
        var trigger1 = document.getElementById("trigger1");
        var animate1 = document.getElementById("animate1");
        let animate1Tween = TweenLite.to(animate1, 0.1, { color: "white" });

        var scene1 = new ScrollMagic.Scene({ triggerElement: trigger1 });
        scene1.setTween(animate1Tween); // trigger a TweenMax.to tween
        scene1.addIndicators({ name: "1 (duration: 1 second)" }); // add indicators (requires plugin)
        scene1.addTo(controller);

        var trigger2 = document.getElementById("trigger2");
        var animate2 = document.getElementById("animate2");
        let animate2Tween = TweenLite.to(animate2, 1, { color: "red" });

        var scene2 = new ScrollMagic.Scene({ triggerElement: trigger2, duration: 200 });
        scene2.setTween(animate2Tween); // the tween durtion can be omitted and defaults to 1
        scene2.addIndicators({ name: "2 (duration: 300 px)" });
        scene2.addTo(controller);

        scene2.on('update', function (event) {
            console.log("Hit enter point of scene 1.");
        });

        scene2.on('leave', function (event) {
            console.log("Hit end point of scene 1.");
        });

        scene2.on("progress", function (event) {
            console.log("Scene progress changed to " + event.progress);
        });


        var trigger3 = document.getElementById("trigger3");
        var animate3 = document.getElementById("animate3");
        var animate4 = document.getElementById("animate4");

        // add multiple tweens, wrapped in a timeline.
        var timeline = new TimelineMax();
        var tween1 = TweenMax.to(animate3, 1, { color: "red" });
        var tween2 = TweenMax.to(animate4, 1, { color: "green" });
        timeline.add(tween1);
        timeline.add(tween2);

        var scene3 = new ScrollMagic.Scene({ triggerElement: trigger3 });
        scene3.setTween(timeline);
        scene3.addIndicators({ name: "3 (duration: 1s)" });
        scene3.addTo(controller);
        */
    }
}