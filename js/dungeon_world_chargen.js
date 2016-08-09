/**
 * Created by chris_000 on 08/08/2016.
 */
var job,
    classDescriptions = {
    "barbarian": "Conflict is all these brutal souls know. Savages, hired muscle, masters of vicious martial techniques, they are not soldiers or professional warriors—they are the battle possessed, creatures of slaughter and spirits of war. Known as barbarians, these warmongers know little of training, preparation, or the rules of warfare; for them, only the moment exists, with the foes that stand before them and the knowledge that the next moment might hold their death.These brutal warriors might rise from all walks of life, both civilized and savage, though whole societies embracing such philosophies roam the wild places of the world.",
    "bard": "The poems say an adventurer’s life is all open roads and the glory of coin and combat. The tales told in every farmhand-filled inn have to have some ring of truth to them, don’t they? The songs to inspire peasantry and royals alike—to soothe the savage beast or drive men to a frenzy—have to come from somewhere. <br> Enter the bard. You, with your smooth tongue and quick wit. You teller-of-tales and singer-of-songs. A mere minstrel can retell a thing, but it takes a true bard to live it. Strap on your boots, noble orator. Sharpen that hidden dagger and take up the call. Someone’s got to be there, fighting shoulder-to-shoulder with the goons and the thugs and the soon-to-be-heroes. Who better than you to write the tale of your own heroism? <br>Nobody. Get going.",
    "cleric": "The lands of Dungeon World are a gods-forsaken mess. They’re lousy with the walking dead, beasts of all sorts, and the vast unnatural spaces between safe and temple-blessed civilizations. It is a godless world out there. That’s why it needs you. <br> Bringing the glory of your god to the heathens isn’t just in your nature—it’s your calling. It falls to you to proselytize with sword and mace and spell, to cleave deep into the witless heart of the wilds and plant the seed of divinity there. Some say that it’s best to keep the gods close to your heart. You know that’s rubbish. God lives at the edge of a blade. <br> Show the world who is lord.",
    "druid":"Cast your eyes around the fire. What has brought you to these people, stinking of the dust and sweat of the city? Perhaps it is a kindness—do you protect them as the mother bear watches over her cubs? Are they your pack, now? Strange brothers and sisters you have. Whatever your inspiration, they would certainly fail without your sharp senses and sharper claws. <br>You are of the sacred spaces; you are born of soil and wear the marks of her spirits on your skin. You may have had a life before, maybe you were a city dweller like them, but not now. You’ve given up that static shape. Listen to your allies pray to their carved stone gods and polish their silver shells. They speak of the glory they’ll find back in that festering town you left behind.<br>Their gods are children, their steel is false protection. You walk the old ways, you wear the pelts of the earth itself. You’ll take your share of the treasure, but will you ever walk as one of them? Only time will tell.",
    "fighter":"It’s a thankless job—living day to day by your armor and the skill of your arm, diving heedlessly into danger. They won’t be playing golden horns for the time you took that knife to the ribs for them in the bar in Bucksberg. No flock of angels will sing of the time you dragged them, still screaming, from the edge of the Pits of Madness, no.<br>Forget them.<br>You do this for the guts and the glory, for the scream of battle and the hot, hot blood of it. You are a beast of iron. Your friends may carry blades of forged steel but, fighter, you are steel. While your traveling companions might moan about their wounds around a campfire in the wilderness, you bear your scars with pride.<br>You are the wall—let every danger smash itself to dust on you.<br>In the end, you’ll be the last one standing.",
    "immolator":"",
    "paladin":"Hell awaits. An eternity of torment in fire or ice or whatever best suits the sins of the damned throngs of Dungeon World. All that stands between the pits of that grim torture and salvation is you. Holy man, armored war machine, templar of the Good and the Light, right? The cleric may say his prayers at night to the gods, dwelling in their heavens. The fighter may wield his sharp sword in the name of “good” but you know. Only you.<br>Eyes, hands, and sweet killing blow of the gods, you are. Yours is the gift of righteousness and virtue—of justice, of Vision, too. A purity of intent that your companions do not have.<br>So guide these fools, paladin. Take up your holy cause and bring salvation to the wastrel world.<br>Vae victis, right?",
    "ranger":"These city-born folk you travel with. Have they heard the call of the wolf? Felt the winds howl in the bleak deserts of the East? Have they hunted their prey with the bow and the knife like you? Hell no. That’s why they need you.<br>Guide. Hunter. Creature of the wilds. You are these things and more. Your time in the wilderness may have been solitary until now, but the call of some greater thing—call it fate if you like—has cast your lot with these folk. Brave, they may be. Powerful and strong, too. But only you know the secrets of the spaces between.<br>Without you, they’d be lost. Blaze a trail through the blood and dark, strider.",
    "thief":"You’ve heard them, sitting around the campfire. Bragging about this battle or that, or about how their gods are smiling on your merry band. You count your coins and smile to yourself—this is the thrill above all. You alone know the secret of Dungeon World: filthy, filthy lucre.<br>Sure, they give you lip for all the times you’ve snuck off alone, but without you, every one of them would have been dissected by a flying guillotine or poisoned straight to death by some ancient needle trap. So let them complain. When you’re done with all this delving you’ll toast their heroes’ graves.<br>From your castle. Full of gold. You rogue.",
    "wizard": "Dungeon World has rules. Not the laws of men or the rule of some petty tyrant. Bigger, better rules. You drop something—it falls. You can’t make something out of nothing. The dead stay dead, right?<br>Oh, the things we tell ourselves to feel better about the long, dark nights.<br>You’ve spent so very long poring over those tomes of yours. Conducting experiments that nearly drove you mad and casting summonings that endangered your very soul. For what? For power. What else is there? Not just the power of King or Country but the power to boil a man’s blood in his veins. To call on the thunder of the sky and the churn of the roiling earth. To shrug off the rules the world holds so dear.<br>Let them cast their sidelong glances. Let them call you “warlock” or “diabolist.” Who among them can hurl fireballs from their eyes?<br>Yeah. Didn’t think so."
    };

function setJob(input) {
    job = input;
    document.getElementById("class-description-title").innerHTML = capitalizeFirstLetter(input);
    document.getElementById("class-description").innerHTML = classDescriptions[input];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function makeCharacter(value) {
    console.log(value);
    var character = {jobclass: "", race: "", name: "", look: {}, stats: {}, maxhp: ""};

    switch (value) {
        case "barbarian":
            makeBarbarian();
            break;
        case "bard":
            makeBard();
            break;
        default:
            break;
    }

    function makeBarbarian() {
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

    function makeBard() {
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
