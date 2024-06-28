DWSM.Preloader = function(game) {};

DWSM.Preloader.prototype = {
    dwhe: new DeucesWildHandEval(),

    preload: function() {
        this.add.sprite(0, 0, 'loading_text');
        var pl = this.add.sprite(0, 0, 'loading');
        this.load.setPreloadSprite(pl);

        // Backgrounds
        this.load.image('card_bg', 'img/card_bg.png');
        this.load.image('game_bg', 'img/game_bg.png');

        // Buttons
        var buttonKeys = [
            'arrow', 'credits', 'deal', 'help', 'respin', 'sound'
        ];
        for (var i = 0; i < buttonKeys.length; i++) {
            this.load.image(buttonKeys[i] + '_off', 'img/buttons/' + buttonKeys[i] + '_off.png');
            this.load.image(buttonKeys[i] + '_on', 'img/buttons/' + buttonKeys[i] + '_on.png');
            if (buttonKeys[i] == 'arrow') {
                this.load.image(buttonKeys[i] + '_disabled', 'img/buttons/' + buttonKeys[i] + '_disabled.png');
            }
        }

        // Cards
        for (var i = 0; i < this.dwhe.cardKeys.length; i++) {
            var dir = 'cards';
            var s = this.dwhe.cardKeys[i].split('-');
            if (s[0] == '2') {
                dir = 'cards_deuces';
            }
            this.load.image(this.dwhe.cardKeys[i], 'img/' + dir + '/' + this.dwhe.cardKeys[i] + '.png');
        }

        // Effects
        //this.load.image('wild_overlay', 'img/effects/wild_overlay.png');
        this.load.image('win_bar_low', 'img/effects/win_bar_low.png');
        this.load.image('win_bar_high', 'img/effects/win_bar_high.png');

        // Helps
        this.load.image('alpha', 'img/alpha.png');
        this.load.image('help_bg', 'img/help/help_bg.png');
        this.load.image('help_button_bg', 'img/help/help_button_bg.png');
        this.load.image('help_button_payouts', 'img/help/help_button_payouts.png');
        this.load.image('help_button_gameplay', 'img/help/help_button_gameplay.png');
        this.load.image('help_button_tips', 'img/help/help_button_tips.png');
        this.load.image('help_button_high_score', 'img/help/help_button_high_score.png');
        this.load.image('help_button_more_games', 'img/help/help_button_more_games.png');

        // Audio
        var audioFiles = [
            'click_arrow',
            'click_deal',
            'click_respin',
            'spin_click',
            'spin_stop',
            'win_extra_large',
            'win_large',
            'win_medium',
            'win_small'
        ];
        for (var i = 0; i < audioFiles.length; i++) {
            this.load.audio(audioFiles[i], ['sounds/mp3/' + audioFiles[i] + '.mp3', 'sounds/ogg/' + audioFiles[i] + '.ogg']);
        }

    },
    create: function() {
        this.state.start('Game');
    }
};