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
                favMovies: [{
                        title: String, 
                        image: String
                    }],
                favSeries: [{ 
                        title: String,
                        image: String }],
                doneQuizz: [{ 
                        title: String,
                        image: String }],
                points: {
                        type: Number,
                        default: 0},
                seenMovies: [{ 
                        title: String,
                        image: String }],
                seenSeries: [{ 
                        title: String,
                        image: String }],
                badges: [{ 
                    title: String, 
                    image: String}],
                role: {
                    type: String, 
                    enum: {
                        values: ['admin', 'advanced', 'regular'],
                        messages: '{VALUE} is not supported'
                    },
                    default: 'regular'
                }
            },
            { timestamps: false }
        );
    // creates a new model Tutorial using the defined schema above
    const User = mongoose.model("user", schema);
    return User;
}; 