import * as newsService from "../services/news.service.js";

export const getAll = async (req, res) => {
  try {
    const news = await newsService.getAll();

    res.status(200).json({
      success: true,
      data: news,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const news = await newsService.getById(req.params.id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    res.status(200).json({
      success: true,
      data: news,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
      image: req.file?.filename || null,
    };

    console.log("BODY:", req.body);
    console.log("DATA:", data);

    const news = await newsService.create(data);

    res.status(201).json({
      success: true,
      message: "News created successfully",
      data: news,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
    };

    if (req.file) {
      data.image = req.file.filename;
    }

    const news = await newsService.update(req.params.id, data);

    res.status(200).json({
      success: true,
      message: "News updated successfully",
      data: news,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    await newsService.remove(req.params.id);

    res.status(200).json({
      success: true,
      message: "News deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};