AFRAME.registerComponent('drive', {
    init: function () {
        var gameStateValue = this.el.getAttribute("game")
        if (gameStateValue == "play") {
            this.driveCar()
        }
    },
    isVelocityActive: function () {
        console.log("hi")
        return Math.random() < 0.25;
    },

    driveCar: function () {
        var multiply = 10;
        var wheelRotation = 0;

        //Key Down Events
        window.addEventListener('keydown', function (e) {

            
            
            //Camera Movement Control: Rotation & Direction on Right & Left Arrow Keyup
           
           

            //Speed Up/Accelerate on Up Arrow Keyup
            
            //Stop/break on Space Keydown
          

        })

        //Key Up Events
        window.addEventListener('keyup', function (e) {
          
        })
    }

});