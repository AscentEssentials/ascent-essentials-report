router.delete(
    "/product/:productId",
    authenticateUser,
    isAdmin,
    ProductController.deleteProductById
  );