let movies = [];

class movie{
    constructor( title, genre, date, guion, direction, ranking, rating){
this.title = title
this.genre = genre
this.date = date
this.guion = guion
this.direction = direction
this.ranking = ranking
this.rating = rating
    }
}

let movie1 = new movie("The Shawshank Redemption", "Drama", "1994", "Stephen King", "Frank Darabont", "1", "9,2")
let movie2 = new movie("The Godfather", "Crimen, Drama", "1972", "Mario Puzo", "Francis Ford Coppola", "2", "9,2")
let movie3 = new movie("The Dark Knight", "Accion, Crimen, Drama", "2008", "Jonathan Nolan", "Cristopher Nolan", "3", "9,0")
let movie4 = new movie("The Godfather Part II", "Crimen, Drama", "1974", "Francis Ford Coppola", "Francis Ford Coppola", "4", "9,0")
let movie5 = new movie("Angry Men", "Crimen, Drama", "1957", "Reginald Rose", "Sidney Lumet", "5", "9,0")



movies.push(movie1)
movies.push(movie2)
movies.push(movie3)
movies.push(movie4)
movies.push(movie5)
console.log(movies);