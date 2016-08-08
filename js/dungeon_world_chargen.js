/**
 * Created by chris_000 on 08/08/2016.
 */


function makeCharacter(value){
    var character = {jobclass: "", race: "", name: "", look: {}, stats: {}, maxhp: ""};
switch (value){
    case "barbarian":
        makeBarbarian();
        break;
    case "bard":
        makeBard();
        break;
    default:
        break;
}

function makeBarbarian(){
    character.jobclass = "Barbarian";
    character.race = "Outsider";
    character.racedescription = "You may be elf, dwarf, halfling, or human, but you and your people are not from around here. At the beginning of each session, the GM will ask you something about your homeland, why you left, or what you left behind. If you answer them, mark XP.";
    character.name = "Gorm, Si-Yi, Priscilla, Sen, Xia, Anneira, Haepha, Lur, Shar, Korrin, Nkosi, Fafnir, Qua, Sacer, Vercin’geto, Barbozar, Clovis, Frael, Thra-raxes, Sillius, Sha-Sheena, Khamisi";
    character.look.body = "Mighty thews, long shanks, scrawny, supple";
    character.look.eyes = "Tormented, haunted, wild, shrouded";
    character.look.decoration = "Tattoos, bejeweled, unmarred";
    character.look.clothes = "Scraps, silks, scavenger’s outfit, weather-inappropriate";
    character.stats.values = [16, 15, 13, 12, 9, 8];



    console.log(character);
}

    function makeBard(){
        character.jobclass = "Bard";
        character.race = ["Elf", "Human"];
        character.racedescription = "You may be elf, dwarf, halfling, or human, but you and your people are not from around here. At the beginning of each session, the GM will ask you something about your homeland, why you left, or what you left behind. If you answer them, mark XP.";
        character.name = "Gorm, Si-Yi, Priscilla, Sen, Xia, Anneira, Haepha, Lur, Shar, Korrin, Nkosi, Fafnir, Qua, Sacer, Vercin’geto, Barbozar, Clovis, Frael, Thra-raxes, Sillius, Sha-Sheena, Khamisi";
        character.look.body = "Mighty thews, long shanks, scrawny, supple";
        character.look.eyes = "Tormented, haunted, wild, shrouded";
        character.look.decoration = "Tattoos, bejeweled, unmarred";
        character.look.clothes = "Scraps, silks, scavenger’s outfit, weather-inappropriate";
        character.stats.values = [16, 15, 13, 12, 9, 8];



        console.log(character);
    }
}
