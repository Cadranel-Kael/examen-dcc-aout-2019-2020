document.documentElement.classList.add('js-enabled');

const app = {
    isPerfectSq(number) { // @ if number is a perfect square
        let sqrt = parseInt(Math.sqrt(number));
        return (sqrt * sqrt === number);
    },
    isFibonacci(number) { // @ if part of the Fibonacci sequence (use isPerfectSq())
        return this.isPerfectSq(5 * number * number + 4) || this.isPerfectSq(5 * number * number - 4);
    },
    addAnimation() { // adds animation to all list items
        const listItems = document.querySelectorAll('#app li');
        for (const listItem of listItems) {
            listItem.addEventListener('click', (e) => {
                e.currentTarget.classList.add('animate');
            })
            listItem.addEventListener('transitionend', (e) => {
                e.currentTarget.classList.remove('animate');
            })
        }
    },
    generateNumbers(start, times) { // generates the list items
        const list = document.getElementById('app');
        if (start >= times) {
            this.addAnimation();
            return;
        }
        if (this.isFibonacci(start)) {
            list.insertAdjacentHTML('beforeend', `<li class="fibonacci grid__item">${start}<div class="ribbon-wrapper"><div data-text="somme" class="ribbon">Fibonacci</div></div></li>`);
        } else if (start % 3 ===0) {
            if (start % 9 === 0) {
                list.insertAdjacentHTML('beforeend', `<li class="multiple-3-9 grid__item">${start}<div class="ribbon-wrapper"><div class="ribbon">3 et 9</div></div></li>`);
            }else {
                list.insertAdjacentHTML('beforeend', `<li class="multiple-3 grid__item">${start}<div class="ribbon-wrapper"><div class="ribbon">3</div></div></li>`);
            }
        } else {
            list.insertAdjacentHTML('beforeend', `<li class="grid__item">${start}</li>`);
        }
        return this.generateNumbers(start+1, times);
    },
    init() {
        this.generateNumbers(1, 201);

        window.addEventListener('scroll', (e) => {
            if ((e.currentTarget.scrollY + e.currentTarget.innerHeight) >= document.documentElement.scrollHeight) {
                const numbers = document.querySelectorAll('li');
                this.generateNumbers(numbers.length, numbers.length + 201);
            }
        })
    }
}

app.init();





