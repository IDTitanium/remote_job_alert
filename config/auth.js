module.exports = {

    'facebookAuth' : {
        'clientID'      : '872760943056177', // your App ID
        'clientSecret'  : '1dc2c1aa725e38965ba207a43856798c', // your App Secret
        'callbackURL'   : 'http://localhost:3020/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    }
