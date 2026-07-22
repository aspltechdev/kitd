import * as membershipService from "../services/membership.service.js";

export const getAll = async (req, res) => {
  try {
    const memberships = await membershipService.getAll();

    res.status(200).json({
      success: true,
      data: memberships,
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
    const membership = await membershipService.getById(req.params.id);

    if (!membership) {
      return res.status(404).json({
        success: false,
        message: "Membership not found",
      });
    }

    res.status(200).json({
      success: true,
      data: membership,
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
    const membership = await membershipService.create(req.body);

    res.status(201).json({
      success: true,
      message: "Membership application submitted successfully",
      data: membership,
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
    const membership = await membershipService.update(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Membership updated successfully",
      data: membership,
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
    await membershipService.remove(req.params.id);

    res.status(200).json({
      success: true,
      message: "Membership deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};