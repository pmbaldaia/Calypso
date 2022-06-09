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
                    enum: {
                        values: ['Action', 'Adventure', 'Sci-fi'],
                        messages: '{VALUE} is not supported'
                    },
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
                image: String,
                comments: [{
                    content: String,
                    name: String
                }],
                ratings:[{
                    type: Number,
                    enum: {
                        values: [1, 2, 3, 4, 5],
                        messages: '{VALUE} is not supported'
                    }
                }],
                seasons:[{
                    season: Number,
                    episodes: Number
                }],
                actors:[{
                    type: String
                }]
            },
            { timestamps: false }
        );
    // creates a new model Tutorial using the defined schema above
    const Serie = mongoose.model("serie", schema);
    return Serie;
};