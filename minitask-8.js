const movie = {
    id: 102,
    title: "Hantu Gunung",
    image: "https://id.pngtree.com/freepng/owl-picture_20305420.html",
    genre: ["Horror", "Komedi", "romantis"],
    cast : [
        {
            name: "Aqil",
            role: "Protagonis"
        },
        {
            name: "Ahmad",
            role: "Antagonis"
        }
    ],
    getShow: function() {
        return {
            title: this.title,
            image: this.image,
            genre: this.genre
        }
    },
    setTittle(judulBaru) {    
        this.title = judulBaru;
    },
    setImage(gambarBaru) {
        this.image = gambarBaru;
    }
}

console.log(`a. Judul= ${movie.title}, Gambar= ${movie.image}, Genre = ${movie.genre}`)
console.log(`b. Cast: ${movie.cast[0].name}, ${movie.cast[1].name}`)
movie.setTittle("Hantu Manis Imut");
// console.log(movie.getShow())
movie.setImage("https://www.pinterest.com/pin/624804148292484486/")
// console.log(movie.getShow())

