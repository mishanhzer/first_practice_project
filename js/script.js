'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "ЛоганS",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const adv = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelectorAll('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list');
    
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');
    
    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 22)}...`;
            }

            movieDB.movies.push(newFilm); // Разбраться как работает этот момент 
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);

            if (favourite) {
                console.log('Добавляем любимый фильм');
            }
            
        }
        addForm.reset();
    })
  

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    
    const makeChanges = () => {
        genre[0].textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };


    const sortArr = (arr) => {
        arr.sort();
    }

    const deleteElement = document.querySelectorAll('.delete');

    function createMovieList(films, parent) {
        parent.innerHTML = '';

        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += ` 
                <li class="promo__interactive-item">${i + 1}${'.'} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            })
        });
    }


    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
    
});
