import * as artistService from "../services/artist.service.js";

export const getAll = async (req, res) => {
  try {
    const artists = await artistService.getAll();

    res.status(200).json({
      success: true,
      data: artists,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const artist = await artistService.getById(req.params.id);

    if (!artist) {
      return res.status(404).json({
        success: false,
        message: "Artist not found",
      });
    }

    res.status(200).json({
      success: true,
      data: artist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const artist = await artistService.create(req.body);

    res.status(201).json({
      success: true,
      message: "Artist created successfully",
      data: artist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const artist = await artistService.update(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Artist updated successfully",
      data: artist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    await artistService.remove(req.params.id);

    res.status(200).json({
      success: true,
      message: "Artist deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};