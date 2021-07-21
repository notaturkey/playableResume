import * as helper from './gameHelper.js'


//i hope no one looks at badly this is designed
var pybutton;
var jbutton;
var pobutton;
var button1;
var button2;
var button3;
var button4;

export function startFirstBug(scene) {
    scene.box.destroy();
    scene.playerBlocked = true;
    helper.fighting(scene);

    helper.textBox(scene,"Oh No! You've encountered a poorly drawn bug!");

    var secondPrompt = false;
    scene.okButton = new helper.AttackButton(300,750,'Ok', scene, () => {
    if (!scene.isTyping && !secondPrompt) {
          helper.textBoxDestroy(scene);
            helper.textBox(scene,"Which skill should Thomas use to defeat this bug?");
            secondPrompt = true;
        }
        else if (!scene.isTyping){
            helper.textBoxDestroy(scene);
            scene.okButton.destroy();
            scene.runButton.destroy();

            skills(scene);
        }
    }, ()=>{});
};

function skills(scene){
    pybutton = new helper.AttackButton(70,650,'Python', scene, () => {
        if (!scene.isTyping) {
            attack(scene);
        }
    }, ()=>{});

    jbutton = new helper.AttackButton(180,650,'JavaScript', scene, () => {
        if (!scene.isTyping) {
            attack(scene);
        }
    }, ()=>{});

    pobutton = new helper.AttackButton(320,650,'Powershell', scene, () => {
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
            helper.attack(scene);
            scene.time.addEvent({
                delay: 500,
                callback: ()=> {
                    //do effect
                    //idk
                    //take off health
                    wasAttacked1(scene);
                }
            })
        }
    })
};

function wasAttacked1(scene) {
    scene.enemyHealth -= 20;
    scene.enemyStats.destroy();
    scene.enemyStats = scene.add.text(260, 370, 'HP:'+scene.enemyHealth+'/100\nLevel:0\nStatus:\n---Poorly Drawn\nDescription:\n---This guy pops\n---up alot.', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });

    helper.textBox(scene,"Its a good thing Thomas learned those skills at Lockheed Martin!");
    var secondPrompt = false;
    scene.okButton = new helper.AttackButton(300,750,'Ok', scene, () => {
    if (!scene.isTyping && !secondPrompt) {
          helper.textBoxDestroy(scene);
            helper.textBox(scene,"What will Thomas use in his arsenol next?");
            secondPrompt = true;
        }
        else if (!scene.isTyping){
            helper.textBoxDestroy(scene);
            scene.okButton.destroy();
            scene.runButton.destroy();

            skills2(scene);
        }
    }, ()=>{});
}

function skills2(scene){
    pybutton = new helper.AttackButton(70,650,'Java', scene, () => {
        if (!scene.isTyping) {
            attack2(scene);
        }
    }, ()=>{});

    jbutton = new helper.AttackButton(180,650,'Jenkins', scene, () => {
        if (!scene.isTyping) {
            attack2(scene);
        }
    }, ()=>{});

    pobutton = new helper.AttackButton(320,650,'Junit', scene, () => {
        if (!scene.isTyping) {
            attack2(scene);
        }
    }, ()=>{});
};


function attack2(scene){
    pybutton.destroy();
    jbutton.destroy();
    pobutton.destroy();
    scene.time.addEvent({
        delay: 1000, // in ms
        callback: () => {
            helper.attack(scene);
            scene.time.addEvent({
                delay: 500,
                callback: ()=> {
                    //do effect
                    //idk
                    //take off health
                    wasAttacked2(scene);
                }
            })
        }
    })
};

function wasAttacked2(scene) {
    scene.enemyHealth -= 20;
    scene.enemyStats.destroy();
    scene.enemyStats = scene.add.text(260, 370, 'HP:'+scene.enemyHealth+'/100\nLevel:0\nStatus:\n---Poorly Drawn\nDescription:\n---This guy pops\n---up alot.', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });

    helper.textBox(scene,"Thomas praises the skills he gained at Travelport!");
    var secondPrompt = false;
    scene.okButton = new helper.AttackButton(300,750,'Ok', scene, () => {
    if (!scene.isTyping && !secondPrompt) {
          helper.textBoxDestroy(scene);
            helper.textBox(scene,"Which skill should Thomas use next?");
            secondPrompt = true;
        }
        else if (!scene.isTyping){
            helper.textBoxDestroy(scene);
            scene.okButton.destroy();

            skills3(scene);
        }
    }, ()=>{});
}

function skills3(scene){
    button1 = new helper.AttackButton(70,700,'.NET with C#', scene, () => {
        if (!scene.isTyping) {
            attack3(scene);
        }
    }, ()=>{});

    button2 = new helper.AttackButton(270,700,'node.js with electron', scene, () => {
        if (!scene.isTyping) {
            attack3(scene);
        }
    }, ()=>{});

    button3 = new helper.AttackButton(70,650,'MongoDB', scene, () => {
        if (!scene.isTyping) {
            attack3(scene);
        }
    }, ()=>{});

    button4 = new helper.AttackButton(200,650,'AWS', scene, () => {
        if (!scene.isTyping) {
            attack3(scene);
        }
    }, ()=>{});
};

function attack3(scene){
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    scene.time.addEvent({
        delay: 1000, // in ms
        callback: () => {
            helper.attack(scene);
            scene.time.addEvent({
                delay: 500,
                callback: ()=> {
                    //do effect
                    //idk
                    //take off health
                    wasAttacked3(scene);
                }
            })
        }
    })
};

function wasAttacked3(scene) {
    scene.enemyHealth -= 20;
    scene.enemyStats.destroy();
    scene.enemyStats = scene.add.text(260, 370, 'HP:'+scene.enemyHealth+'/100\nLevel:0\nStatus:\n---Poorly Drawn\nDescription:\n---This guy pops\n---up alot.', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });

    helper.textBox(scene,"Samtec Microelectronics really left Thomas well prepared!");
    var secondPrompt = false;
    scene.okButton = new helper.AttackButton(300,750,'Ok', scene, () => {
    if (!scene.isTyping && !secondPrompt) {
          helper.textBoxDestroy(scene);
            helper.textBox(scene,"What skill should Thomas use now?");
            secondPrompt = true;
        }
        else if (!scene.isTyping){
            helper.textBoxDestroy(scene);
            scene.okButton.destroy();
            scene.runButton.destroy();

            skills4(scene);
        }
    }, ()=>{});
}

function skills4(scene){
    button1 = new helper.AttackButton(70,700,'Groovy', scene, () => {
        if (!scene.isTyping) {
            attack4(scene);
        }
    }, ()=>{});

    button2 = new helper.AttackButton(180,700,'Docker', scene, () => {
        if (!scene.isTyping) {
            attack4(scene);
        }
    }, ()=>{});

    button3 = new helper.AttackButton(320,700,'C and C++', scene, () => {
        if (!scene.isTyping) {
            attack4(scene);
        }
    }, ()=>{});

    button4 = new helper.AttackButton(180,650,'Bash', scene, () => {
        if (!scene.isTyping) {
            attack4(scene);
        }
    }, ()=>{});
};

function attack4(scene){
    button1.destroy();
    button2.destroy();
    button3.destroy();
    button4.destroy();
    scene.time.addEvent({
        delay: 1000, // in ms
        callback: () => {
            helper.attack(scene);
            scene.time.addEvent({
                delay: 500,
                callback: ()=> {
                    //do effect
                    //idk
                    //take off health
                    wasAttacked4(scene);
                }
            })
        }
    })
};

function wasAttacked4(scene) {
    scene.enemyHealth -= 40;
    scene.enemyStats.destroy();
    scene.enemyStats = scene.add.text(260, 370, 'HP:'+scene.enemyHealth+'/100\nLevel:0\nStatus:\n---Poorly Drawn\nDescription:\n---This guy pops\n---up alot.', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });

    var prompt = 0;
    helper.textBox(scene,"Critical Hit!");
    scene.okButton = new helper.AttackButton(300,750,'Ok', scene, () => {
        switch(prompt) {
        case 0:
            prompt += 1;
            helper.textBoxDestroy(scene);
            helper.textBox(scene,"Thomas's internship at NASA and his fulltime position following the internship really packs a punch!");
            // code block
            break;
        case 1:
            prompt += 1;
            helper.textBoxDestroy(scene);
            helper.textBox(scene,"Thomas has defeated a bug! There will be more to come I'm sure.");
            break;
        default:
            helper.textBoxDestroy(scene);
            scene.playerBlocked = false;
            helper.notFighting(scene);
            scene.bug.destroy();
            // code block
            scene.runButton = new helper.Button(300, 750, 'Run', scene, () => scene.runDown(), () => scene.runUp());
        }
    }, ()=>{});
}
