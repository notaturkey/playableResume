import * as helper from './gameHelper.js'

var pybutton;
var jbutton;
var pobutton;

export function startFirstBug(scene) {
    scene.box.destroy();
    scene.playerBlocked = true;
    helper.fighting(scene);

    helper.textBox(scene,"Oh No! You've encountered a poorly drawn bug!");

    scene.secondPrompt = false;
    this.button = new helper.AttackButton(300,750,'Ok', scene, () => {
    if (!scene.isTyping && !scene.secondPrompt) {
          helper.textBoxDestroy(scene);
            helper.textBox(scene,"Which skill should thomas use to defeat this bug?");
            scene.secondPrompt = true;
        }
        else if (!scene.isTyping){
            helper.textBoxDestroy(scene);
            this.button.destroy();
            scene.runButton.destroy();

            skills(scene);
        }
    }, ()=>{});
}

function skills(scene){
    pybutton = new helper.AttackButton(70,700,'Python', scene, () => {
        if (!scene.isTyping) {
            attack(scene);
        }
    }, ()=>{});

    jbutton = new helper.AttackButton(180,700,'JavaScript', scene, () => {
        if (!scene.isTyping) {
            attack(scene);
        }
    }, ()=>{});

    pobutton = new helper.AttackButton(320,700,'Powershell', scene, () => {
        if (!scene.isTyping) {
            attack(scene);
        }
    }, ()=>{});
};

function attack(scene){
    pybutton.destroy();
    jbutton.destroy();
    pobutton.destroy();
    scene.time.addEvent({
        delay: 1000, // in ms
        callback: () => {

        }
    })
    helper.attack(scene);

    //do effect
    //take off health

    //more skills?
}
