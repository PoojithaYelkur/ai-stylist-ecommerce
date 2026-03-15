export const tryOnProduct = async (req, res) => {
  try {

    const { image, product } = req.body;

    // fake processing (MVP)
    // later you can add AI / overlay here

    res.json({
      message: "TryOn success",
      resultImage:
        "https://via.placeholder.com/300",
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};