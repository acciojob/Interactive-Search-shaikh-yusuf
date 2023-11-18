//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', function () {
            const searchDiv = document.querySelector('.search');
            const input = document.querySelector('.input');
            const btn = document.querySelector('.btn');

            btn.addEventListener('click', function () {
                searchDiv.classList.add('active');
                input.focus();
            });
        });