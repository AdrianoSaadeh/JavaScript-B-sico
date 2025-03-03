const LIST = [
    {
        id: 1,
        nome: 'Yoda',
        avatar: 'imgaes/yoda.png',
    },
    {
        id: 2,
        nome: 'Luke',
        avatar: 'imgaes/luke.png',
    },
    {
        id: 3,
        nome: 'Leia',
        avatar: 'imgaes/leia.png',
    },
    {
        id: 4,
        nome: 'Han Solo',
        avatar: 'imgaes/hansolo.png',
    },
    {
        id: 5,
        nome: 'Darth Vader',
        avatar: 'imgaes/vader.png',
    },
    {
        id: 6,
        nome: 'Chewbacca',
        avatar: 'imgaes/chewbacca.png',
    },
    {
        id: 7,
        nome: 'R2D2',
        avatar: 'imgaes/r2d2.png',
    },
    {
        id: 8,
        nome: 'C3PO',
        avatar: 'imgaes/c3po.png',
    }
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Aline Santos',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(name) {
            alert(`O personagem ${name} recebeu 1 like!`)
        },
        search() {

            if (this.searchName === '') {
                return alert('Campo de busca está vazio. Informe um personagem')
            }

            const list = this.characters = LIST

            const result = list.filter(item => {
                return item.nome === this.searchName
            })

            if (result.length <= 0) {
                alert('Nenhum registro encontrado!')
            } else {
                this.characters = result
            }


        }
    }
})