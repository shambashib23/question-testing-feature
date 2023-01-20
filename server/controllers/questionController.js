export const studentQuestionsfromDB = async (req, res) => {
    try {
        // This function will get the chart data for the specific user from the database
        // In this example, we will return hardcoded data for demonstration
        const questions =
            [
                {
                    text: "What is your name?"
                },
                {
                    text: "What is your favourite colour?"
                },
                {
                    text: "What is your favorite Pet?"
                }

            ]
        return res.status(200).json({
            success: true,
            data: questions
        });


    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
}