import * as helper from './gameHelper.js'

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
        else{
            helper.textBoxDestroy(scene);
            this.button.destroy();
            scene.runButton.destroy();

            skills(scene);
        }
    }, ()=>{});
}

function skills(scene){

    var pybutton = new helper.AttackButton(70,700,'Python', scene, () => {
        if (!scene.isTyping) {
            helper.textBoxDestroy(scene);
            this.button.destroy();
            //this.button = new AttackButton(200, 750, 'Attack', this, () => this.attack(), ()=>{});
          }
    }, ()=>{});

    var jbutton = new helper.AttackButton(180,700,'JavaScript', scene, () => {
        if (!scene.isTyping) {
            helper.textBoxDestroy(scene);
            this.button.destroy();
            //this.button = new AttackButton(200, 750, 'Attack', this, () => this.attack(), ()=>{});
          }
    }, ()=>{});

    var pobutton = new helper.AttackButton(320,700,'Powershell', scene, () => {
        if (!scene.isTyping) {
            helper.textBoxDestroy(scene);
            this.button.destroy();
            //this.button = new AttackButton(200, 750, 'Attack', this, () => this.attack(), ()=>{});
          }
    }, ()=>{});
}
