let element = {
    country: 'UAE',
    Citites1: 'Dubai',
    Citites2: 'Abu-Dhabi',
    Citites3: 'Sharjah',
    list: function() {
        return this.country + "\n" +
            this.Citites1 + "\n" + this.Citites2 + "\n" + this.Citites3;

    }
};

console.log(element.list());