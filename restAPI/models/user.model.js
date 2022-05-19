module.exports = (mongoose) => {
    const schema = mongoose.Schema(
            {
                name: { 
                    type: String,  
                    unique: true,
                    required: [true, 'Why no name?'] 
                },
                password: { 
                    type: String, 
                    trim: true,
                    required: [true, 'Why no password?'] 
                },
                email: { 
                    type: String,
                    unique: true, 
                    required: [true, 'Why no email?'] 
                },
                favMovies: [{ title: String }],
                favSeries: [{ title: String }],
                doneQuizz: [{ title: String }],
                points: {type: Number,default: 0},
                seenMovies: [{ title: String }],
                seenSeries: [{ title: String }],
                badges: [{ 
                    title: String, 
                    image: []}],
                type: {
                    type: String, 
                    enum: {
                        values: ['admin', 'regular'],
                        messages: '{VALUE} is not supported'
                    }
                }
            },
            { timestamps: false }
        );
    // creates a new model Tutorial using the defined schema above
    const User = mongoose.model("user", schema);
    return User;
}; 