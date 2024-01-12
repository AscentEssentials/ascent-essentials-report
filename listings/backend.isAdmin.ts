export const isAdmin = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    const user = req.user as IUserDocument;
  
    if (!user || !user.isAdmin) {
      return res.status(403).send("Access denied");
    }
  
    next();
  };