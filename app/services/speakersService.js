app.service('speakersService', function () {
    this.getSpeakers = function () {
        return speakers;
    };

    this.insertSpeaker = function (firstName, lastName, pres) {
        var topID = speakers.length + 1;
        speakers.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            pres: pres
        });
    };

    this.deleteSpeaker = function (id) {
        for (var i = speakers.length - 1; i >= 0; i--) {
            if (speakers[i].id === id) {
                speakers.splice(i, 1);
                break;
            }
        }
    };

    this.getSpeaker = function (id) {
        for (var i = 0; i < speakers.length; i++) {
            if (speakers[i].id === id) {
                return speakers[i];
            }
        }
        return null;
    };

    // For test purpose, I have no WebService to connect with / Would need more time. So instead, this shoud be an AJAX call in real project.
    var speakers = [
        {
            id: 1, firstName: 'Alice', lastName: 'Alice', address: 'au pays des merveille', pres: 'Clermont',
            stages: [
                { speak: 'SVN', day:"monday", stage: 1 },
                { speak: 'GIT', day:"tuesday", stage: 4 },
                { speak: 'open Source World', day:"wednesday", stage: 3}
            ],
            comments: [
                { text: 'sit amet'},
                { text: 'Lorem ipsum dolor'}
            ]
        },
        {
            id: 2, firstName: 'Bob', lastName: 'lennon', address: 'heaven', pres: 'Clermont-ferrand',
            stages: [
                { speak: 'Javascript power', day:"monday", stage: 1 },
                { speak: 'Angular', day:"monday", stage: 2},
                { speak: 'ReactJs', day:"tuesday", stage: 3},
                { speak: 'NodeJS', day:"wednesday", stage: 2 }
            ],
            comments: [
                { text: 'Awersome Experience, Ionic will win!'},
                { text: 'Lorem ipsum dolor'}
            ]
        },
        {
            id: 3, firstName: 'Charlie', lastName: 'hedbo', address: 'Lorem ipsum dolor', pres: 'sit amet',
            stages: [
                { speak: 'PHP', day:"monday", stage: 4},
                { speak: 'SF2', day:"tuesday", stage: 1}
            ],            
            comments: [
                { text: 'sit amet'},
                { text: 'Lorem ipsum dolor'}
            ]
        },
        {
            id: 4, firstName: 'David', lastName: 'Strettle', address: 'sed do eiusmod tempor', pres: 'ASM',
            stages: [
                { speak: 'lorem', day:"monday", stage: 1},
                { speak: 'Ipsum', day:"wednesday", stage: 2}
            ],
            comments: [
                { text: 'sit amet'},
                { text: 'Lorem ipsum dolor'}
            ]
        },
    ];

});
