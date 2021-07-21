import * as helper from './gameHelper' ;

var button1;
var button2;
var button3;

export function end(scene) {
    scene.box2.destroy();
    scene.playerBlocked = true;
    scene.runButton.destroy();

    helper.textBox(scene,"That's all for now, thanks for playing through Thomas's interactive resume!");
    scene.okButton = new helper.AttackButton(300,750,'Ok', scene, () => {
    if (!scene.isTyping) {
            helper.textBoxDestroy(scene);
            links(scene);
        }
    }, ()=>{});
};

function links(scene){
    scene.okButton.destroy();
    button1 = new helper.AttackButton(70,700,'LinkedIn', scene, () => {
        var url = 'https://www.linkedin.com/in/thomas-mcdonald-ii-779303138/';
        var s = window.open(url, '_blank');
        if (s && s.focus) {
            s.focus();
        }
        else if (!s) {
            window.location.href = url;
        }
    }, ()=>{});

    button2 = new helper.AttackButton(180,700,'GitHub', scene, () => {
        var url = 'https://github.com/notaturkey';
        var s = window.open(url, '_blank');
        if (s && s.focus) {
            s.focus();
        }
        else if (!s) {
            window.location.href = url;
        }
    }, ()=>{});

    button3 = new helper.AttackButton(320,700,'Email', scene, () => {
        var url = 'mailto:mcdonald.thomas1284@gmail.com';
        var s = window.open(url, '_blank');
        if (s && s.focus) {
            s.focus();
        }
        else if (!s) {
            window.location.href = url;
        }
    }, ()=>{});
}
