import * as testimonialService from "../services/testimonial.service.js";

export const getAll = async (req, res) => {
  try {
    const testimonials = await testimonialService.getAll();

    return res.status(200).json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const testimonial = await testimonialService.getById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// export const create = async (req, res) => {
//   try {
//     const testimonial = await testimonialService.create(req.body);

//     return res.status(201).json({
//       success: true,
//       message: "Testimonial created successfully",
//       data: testimonial,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// export const create = async (req, res) => {
//   try {
//     console.log("📦 req.body:", JSON.stringify(req.body));
//     console.log("📦 typeof req.body:", typeof req.body);
    
//     // ✅ Create with explicit data object
//     const data = {
//       name: req.body?.name || "Unknown",
//       email: req.body?.email || null,
//       message: req.body?.message || "",
//       rating: parseInt(req.body?.rating) || 5,
//     };

//     console.log("📦 Creating with:", data);

//     const testimonial = await testimonialService.create(data);

//     return res.status(201).json({
//       success: true,
//       message: "Testimonial created successfully",
//       data: testimonial,
//     });
//   } catch (error) {
//     console.error("❌ Error:", error.message);
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export const create = async (req, res) => {
  try {
    console.log("📦 req.body:", req.body);
    console.log("📦 req.file:", req.file);

    // ✅ Build data object manually to avoid undefined errors
    const data = {
      name: req.body?.name || "",
      email: req.body?.email || "",
      message: req.body?.message || "",
      rating: parseInt(req.body?.rating) || 5,
      image: req.file?.filename || null,
    };

    console.log("📦 Creating with:", data);

    const testimonial = await testimonialService.create(data);

    return res.status(201).json({
      success: true,
      message: "Testimonial submitted successfully",
      data: testimonial,
    });
  } catch (error) {
    console.error("❌ Error:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const testimonial = await testimonialService.update(
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
      data: testimonial,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    await testimonialService.remove(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};