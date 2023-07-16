/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');

    WA.room.hideLayer('cat') ;

    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('catPopup').subscribe(() => {

        var mySound = WA.sound.loadSound("./assets/cat-meow.mp3");
        console.log('meow');
        var config = {volume : 1, loop : false, rate : 1, detune : 1, delay : 0, seek : 0, mute : false}
        WA.room.showLayer('cat');   
        mySound.play(config);
        
        mySound.stop(); 
        WA.room.area.onLeave('catPopup').subscribe(closeCatPopup);   
        console.log('meow weg');

    })

    WA.room.area.onEnter('Leinwand').subscribe(() => {
        WA.openTab('https://www.bpb.de/themen/kultur/digitale-spiele/504558/gamification-grundbegriffe-chancen-und-risiken/#node-content-title-0');
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closeCatPopup(){
        WA.room.hideLayer('cat') ;

}
export {};
