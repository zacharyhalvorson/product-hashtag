(function () {
    OAuth.initialize('86c6vlz6lvNWAVAfBUQnqsAr7r8');

    OAuth.popup('instagram').done(function(result) {

        var instagramUrl = 'https://api.instagram.com/v1/tags/freshsqueezedipa/media/recent';
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
})();