module.exports = (mongoose) => {
    const schema = mongoose.Schema(
            {
                type: {
                    type: String,  
                    unique: true,
                    required: [true, 'Why no type?']
                },
                title: { 
                    type: String, 
                    required: [true, 'Why no title?'] 
                },
                image: [],
                points:{
                    type: Number, 
                    required: [true, 'Why no points?']
                },
                quizz:[{
                    question: String, 
                    answers:[{
                        answer: String, 
                        isTrue: Boolean
                    }]
                }]
            },
            { timestamps: false }
        );
    // creates a new model Tutorial using the defined schema above
    const Quizz = mongoose.model("quizz", schema);
    return User;
};