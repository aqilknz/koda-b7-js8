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
        return `
        Judul= ${this.title}, Gambar= ${this.image}, Genre = ${this.genre}
        `;
    },
    getNameCast: function() {
        let actorList = "";
        for (let i = 0; i < this.cast.length; i++) {
          const actor = this.cast[i];
          actorList += `${actor.name} sebagai ${actor.role}\n`;
        }
        return actorList;
    },
    setTittle(judulBaru) {    
        this.title = judulBaru;
    },
    setImage(gambarBaru) {
        this.image = gambarBaru;
    }
}

console.log(movie.getShow())
console.log(movie.getNameCast())
movie.setTittle("Hantu Manis Imut");
// console.log(movie.getShow())
movie.setImage("https://www.pinterest.com/pin/624804148292484486/")
// console.log(movie.getShow())

