const router = require("express").Router();
const adminController = require("../Controllers/adminController");
const { uploadSingle, uploadMultiple } = require("../Middlewares/multer");
const auth = require("../Middlewares/auth");

router.get("/signin", adminController.viewSignin);
router.post("/signin", adminController.actionSignin);
router.use(auth);
router.get("/logout", adminController.actionLogout);

router.get("/dashboard", adminController.viewDashoard);

//Endpoint Category
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

//Endpoint Bank
router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.put("/bank", uploadSingle, adminController.editBank);
router.delete("/bank/:id", adminController.deleteBank);

//Endpoint Item
router.get("/item", adminController.viewItem);
router.get("/item/show-image/:id", adminController.showImage);
router.get("/item/:id", adminController.showEditItem);
router.post("/item", uploadMultiple, adminController.addItem);
router.put("/item/:id", uploadMultiple, adminController.editItem);
router.delete("/item/:id", adminController.deleteItem);

//Endpoint Detail Featured
router.get("/item/show-detail-item/:itemId", adminController.viewDetailItem);
router.post("/item/add/feature", uploadSingle, adminController.addFeature);
router.put("/item/update/feature", uploadSingle, adminController.editFeature);
router.delete("/item/:itemId/feature/:id", adminController.deleteFeature);

//Endpoint Detail Activity
router.post("/item/add/activity", uploadSingle, adminController.addActivity);
router.put("/item/update/activity", uploadSingle, adminController.editActivity);
router.delete("/item/:itemId/activity/:id", adminController.deleteActivity);

router.get("/booking", adminController.viewBooking);
router.get("/booking/:id", adminController.showDetailBooking);
router.put("/booking/:id/confirmation", adminController.actionConfirmation);
router.put("/booking/:id/reject", adminController.actionReject);

module.exports = router;
