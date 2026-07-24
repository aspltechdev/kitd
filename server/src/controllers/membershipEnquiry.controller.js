import * as membershipEnquiryService from "../services/membershipEnquiry.service.js";

export const getAll = async (req, res) => {
  try {
    const enquiries = await membershipEnquiryService.getAll();

    res.status(200).json({
      success: true,
      data: enquiries,
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
    const enquiry = await membershipEnquiryService.getById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Membership enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: enquiry,
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
    const enquiry = await membershipEnquiryService.create(req.body);

    res.status(201).json({
      success: true,
      message: "Membership application submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const enquiry = await membershipEnquiryService.updateStatus(
      req.params.id,
      req.body.status
    );

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const approve = async (req, res) => {
  try {
    const member = await membershipEnquiryService.approve(req.params.id);

    res.status(200).json({
      success: true,
      message: "Member approved successfully",
      data: member,
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
    await membershipEnquiryService.remove(req.params.id);

    res.status(200).json({
      success: true,
      message: "Membership enquiry deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};