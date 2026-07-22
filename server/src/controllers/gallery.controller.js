import * as galleryService from "../services/gallery.service.js";

export const getAll = async (req, res) => {
  try {
    const galleries = await galleryService.getAll();

    res.status(200).json({
      success: true,
      data: galleries,
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
    const gallery = await galleryService.getById(req.params.id);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    res.status(200).json({
      success: true,
      data: gallery,
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
    const gallery = await galleryService.create(req.body);

    res.status(201).json({
      success: true,
      message: "Gallery item created successfully",
      data: gallery,
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
    const gallery = await galleryService.update(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Gallery item updated successfully",
      data: gallery,
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
    await galleryService.remove(req.params.id);

    res.status(200).json({
      success: true,
      message: "Gallery item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};