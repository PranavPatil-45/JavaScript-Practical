class Movies
{
    static allRating =0;

    constructor(title)
    {
        this.title = title;
        this.ratingOnmovies = [];
    }

    addRating(rating)
    {
        this.ratingOnmovies.push(rating);
        Movies.allRating ++;
    }

    print()
    {
        document.writeln("Total Rating Given To Movie  ="+ Movies.allRating +"<br>");
    }

}

const moviepicker = new Movies("Rang De Basanti");

moviepicker.addRating(5);

moviepicker.addRating(4);

moviepicker.addRating(3);

moviepicker.print();

const Movie_ticker = new Movies("Dhadak");

Movie_ticker.addRating(5);

Movie_ticker.addRating(4);

Movie_ticker.addRating(5);

Movie_ticker.print();