var example = document.getElementById("example"),
			    ctx     = example.getContext('2d');
            example.width  = 600;
            example.height = 600;
            ctx.strokeRect(75, 10, 50, 20);
            ctx.strokeRect(50, 30, 100, 250);
ctx.clearRect(50,280,100,-250);
$(document.body).on('keydown', function(e) {
    switch (e.which) {
        case 49:
            ctx.clearRect(50,280,100,-250);
            ctx.fillStyle = "orange";
            ctx.fillRect(50,280,100,-25);
            console.log("49")
            break;
        case 50:
            ctx.clearRect(50,280,100,-250);
            ctx.fillStyle = "orange";
            ctx.fillRect(50,280,100,-50);
            break;
             case 51:
            ctx.clearRect(50,280,100,-250);
            ctx.fillStyle = "orange";
            ctx.fillRect(50,280,100,-75);
            break;
             case 52:
            ctx.clearRect(50,280,100,-250);
            ctx.fillStyle = "orange";
            ctx.fillRect(50,280,100,-100);
            break;
             case 53:
            ctx.clearRect(50,280,100,-250);
            ctx.fillStyle = "orange";
            ctx.fillRect(50,280,100,-125);
            break;
             case 54:
            ctx.clearRect(50,280,100,-250);
            ctx.fillStyle = "orange";
            ctx.fillRect(50,280,100,-150);
            break;
            case 55:
            ctx.clearRect(50,280,100,-250);
            ctx.fillStyle = "orange";
            ctx.fillRect(50,280,100,-175);
            break;

            case 56:
            ctx.clearRect(50,280,100,-250);
            ctx.fillStyle = "orange";
            ctx.fillRect(50,280,100,-200);

            break;

                 case 57:
            ctx.clearRect(50,280,100,-250);
            ctx.fillStyle = "orange";
            ctx.fillRect(50,280,100,-250);
            break;
                 case 48:
            ctx.clearRect(50,280,100,-250);
            break;
    }
});
