// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

let capture;
let tracker
let mask;
function preload() {
    mask = loadImage("images/jack.png");
}

function setup() {
    createCanvas(640, 480);
    capture = createCapture({
        audio: false,
        video: {
            width: 640,
            height: 480
        }
    });

    capture.size(640, 480);
    capture.hide();
    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
}

function draw() {
    imageMode(CORNER);
    image(capture, 0, 0, 640, 480);

    let positions = tracker.getCurrentPosition();
    if (positions.length > 0) {
        let tlx = width;
        let tly = height;
        let brx = 0;
        let bry = 0;
        for (let i = 0; i < positions.length; i++) {
            if (positions[i][0] > brx) brx = positions[i][0];
            if (positions[i][0] < tlx) tlx = positions[i][0];
            if (positions[i][1] > bry) bry = positions[i][1];
            if (positions[i][1] < tly) tly = positions[i][1];
        }
        imageMode(CORNERS);
        image(mask, tlx, tly, brx, bry);
    }
}
