export const authenticateUser = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    const token = req.header("Authorization")?.split(" ")[1];
  
    if (!token) return res.status(401).send("Unauthorized");
  
    try {
      const userId = getUserIdFromToken(token);
      const user = await UserModel.findById(userId);
  
      if (!user) {
        return res.status(401).send("Invalid user.");
      }
  
      req.user = user; // Store user details on req.user
      next();
    } catch (error) {
      console.error("[AuthMiddleware] Error:", error);
      res.status(401).send("Invalid token.");
    }
  };