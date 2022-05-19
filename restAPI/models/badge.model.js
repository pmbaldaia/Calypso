module.exports = (mongoose) => {
    const schema = mongoose.Schema(
            {
                imagem: [],
                title: { 
                    type: String, 
                    unique: true,
                    required: [true, 'Why no name?'] 
                },
                reqPoints: Number,
            },
            { timestamps: false }
        );
    // creates a new model Tutorial using the defined schema above
    const Badge = mongoose.model("badge", schema);
    return User;
};