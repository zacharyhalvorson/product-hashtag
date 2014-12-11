(function() {
    var hashtag = window.location.hash.replace('#','');

    document.querySelector('.product-name').textContent = hashtag;

    OAuth.initialize('86c6vlz6lvNWAVAfBUQnqsAr7r8');
    OAuth.popup('twitter', {cache: true}).done(function(result) {
        var twitterUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=%23' + hashtag;

        result.get(twitterUrl).done(function(response) {
            var template = document.querySelector('#tweetTemplate');

            for (index in response.statuses) {
                var tweet = response.statuses[index];
                var text = tweet.text;
                var date = new Date(tweet.created_at).toDateString();
                var username = tweet.user.screen_name;

                template.content.querySelector('.user').textContent = '@' + username;
                template.content.querySelector('.date').textContent = date;
                template.content.querySelector('.tweetText').textContent = text;

                var clone = document.importNode(template.content, true);
                document.body.appendChild(clone);
            }

            OAuth.popup('instagram', {cache: true}).done(function(result) {

                var instagramUrl = 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent';
                result.get(instagramUrl).done(function(response) {
                    var template = document.querySelector('#instagramTemplate');

                    for (i in response.data) {
                        var gram = response.data[i];
                        var url = gram.images.standard_resolution.url;
                        var username = gram.user.username;
                        var date = new Date(gram.created_time * 1000).toDateString();

                        template.content.querySelector('img').src = url;
                        template.content.querySelector('.user').textContent = '@' + username;
                        template.content.querySelector('.date').textContent = date;

                        var clone = document.importNode(template.content, true);
                        document.body.appendChild(clone);

                    }
                }).fail(function(err) {
                    console.log(err);
                });

            });


        }).fail(function(err) {
            console.log(err);
        });
    });
})();
