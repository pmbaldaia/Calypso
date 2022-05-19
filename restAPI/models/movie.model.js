module.exports = (mongoose) => {
    const schema = mongoose.Schema(
            {
                title: { 
                    type: String,  
                    unique: true,
                    required: [true, 'Why no title?'] 
                },
                type: {
                    type: String, 
                    required: [true, 'Why no type?']
                },
                realizador: {
                    type: String, 
                    required: [true, 'Why no real?']
                },
                description: {
                    type: String, 
                    required: [true, 'Why no desc?']
                },
                duration: {type: Number, 
                    required: [true, 'Why no duration?']
                },
                image: [],
                comments: [{
                    body: String, 
                    name: String
                }],
                ratings:[{note: Number}],
                actors:[{name: String}]
            },
            { timestamps: false }
        );
    // creates a new model Tutorial using the defined schema above
    const Movie = mongoose.model("movie", schema);
    return User;
};