export default class Article {
    constructor({id, title, urlToImg, tags, ...rest}) {
        this.id = id;
        this.title = title;
        this.urlToImg = urlToImg;
        this.tags = tags;
    }

    generateArticle() {
        let article = document.createElement('article');
        article.className ='strategy block-shadowed';
        article.setAttribute('data-id', this.id);

        let template = '';

        this.urlToImg &&
        (template += `<img class="strategy__image" src="img/strategies/${this.id}.png" alt="strategy">`)

        if (this.title || this.tags) {
            template += '<div class="strategy__content">';
                template += `<h3 class="strategy__name">${this.title}</h3>`;
                template += '<div class="strategy__tags tags">'
                    this.tags.map( tag => {
                        template += `<span class="tag tag_colored">${tag}</span>`
                    });
                template += '</div>'
            template += '</div>';
        }

        article.innerHTML = template;

        return article;
    }
}
