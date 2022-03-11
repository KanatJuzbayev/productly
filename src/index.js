import Article from './js/Article.js'

import data from './data.json' assert { type: "json" };

window.onload = function() {
    //Tags
    addTagClickHendler();
    // Articles
    showArticles(data);
}

const addTagClickHendler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTag();
            selectClickedTag(clickedTag);

            if (clickedTag.innerText === 'All') {
                showAllStrategies();
            } else {
                filetStrategiesByTag(clickedTag.innerText)
            }
        };
    })
}

const removeSelectedTag = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    });
}

const selectClickedTag = (tag) => {
    tag.classList.remove('tag_bordered');
    tag.classList.add('tag_selected');
}

const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategies-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hiden');
    });
}

const filetStrategiesByTag = (tag) => {
    let strategies = document.querySelectorAll('.strategies-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.add('strategy_hiden');

        strategy.querySelectorAll('.tag').forEach(strategyTag => {
            if (strategyTag.innerText === tag) {
                strategy.classList.remove('strategy_hiden');
            }
        })
    })
}

const showArticles = (data) => {
    let strategiesWrapper = document.querySelector('.strategies-wrapper');
    strategiesWrapper.innerHTML = '';

    let content = [];
    data.forEach(artile => {
        content.push(new Article(artile));
    });

    content.forEach(artile => {
        strategiesWrapper.append(artile.generateArticle());
    });
}
